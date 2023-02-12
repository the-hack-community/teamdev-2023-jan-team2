# frozen_string_literal: true

class Mutations::ImageUpdate < GraphQL::Schema::Mutation
  description 'Updates a image by id'

  field :image, Types::ImageType, null: false

  argument :id, ID, required: true
  argument :image_input, Types::ImageInputType, required: true

  def resolve(id:, image_input:)
    image = ::Image.find(id)
    raise GraphQL::ExecutionError.new 'Error updating image', extensions: image.errors.to_hash unless image.update(**image_input)

    { image: }
  end
end
