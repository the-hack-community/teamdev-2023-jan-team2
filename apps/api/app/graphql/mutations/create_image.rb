class Mutations::CreateImage < BaseMutation
  field :image, Types::ImageType, null: true

  argument :description, String, required: true
  argument :keyword, String, required: false

  type Types::ImageType

  def resolve(description:, keyword:)
    Image.create!(description:, keyword:)
  end
end
