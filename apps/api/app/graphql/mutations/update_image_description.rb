class Mutations::UpdateImageDescription < BaseMutation
  field :image, Types::ImageType, null: true

  argument :id, ID, required: true
  argument :description, String, required: true

  type Types::ImageType

  def resolve(id:, **attributes)
    image = Image.find_by(id:)
    image.update!(attributes)

    image
  end
end
