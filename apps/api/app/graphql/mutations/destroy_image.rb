class Mutations::DestroyImage < BaseMutation
  field :image, Types::ImageType, null: true

  argument :id, ID, required: true
  argument :description, String, required: true

  type Types::ImageType

  def resolve(id:)
    image = Image.find_by(id:)
    image.destroy!
  end
end
