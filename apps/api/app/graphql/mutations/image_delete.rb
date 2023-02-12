# frozen_string_literal: true

class Mutations::ImageDelete < BaseMutation
  description 'Deletes a image by ID'

  field :image, Types::ImageType, null: false

  argument :id, ID, required: true

  def resolve(id:)
    image = ::Image.find(id)
    raise GraphQL::ExecutionError.new 'Error deleting image', extensions: image.errors.to_hash unless image.destroy

    { image: }
  end
end
