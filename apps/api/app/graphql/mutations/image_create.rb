# frozen_string_literal: true

class Mutations::ImageCreate < GraphQL::Schema::Mutation
  description 'Creates a new image'

  field :image, Types::ImageType, null: false

  argument :image_input, Types::ImageInputType, required: true

  def resolve(image_input:)
    uri = URI("#{ENV.fetch('SD_BASE_URL', nil)}/sdapi/v1/txt2img")

    request = Net::HTTP::Post.new(uri)
    request['Content-Type'] = 'application/json'
    request.body = {
      prompt: image_input[:prompt],
      steps: image_input[:steps],
      'Clip skip': image_input[:'Clip skip']
    }.to_json

    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end

    images = JSON.parse(response.body)['images'][0]
    image = ::Image.new(**image_input
                            .to_h.merge(image_src: images)
                            .to_h.merge(id: Image.last.id + 1))

    raise GraphQL::ExecutionError.new 'Error creating image', extensions: image.errors.to_hash unless image.save

    { image: }
  end
end
