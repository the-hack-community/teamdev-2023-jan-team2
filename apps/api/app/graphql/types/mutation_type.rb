class Types::MutationType < Types::BaseObject
  field :destroy_image, mutation: Mutations::DestroyImage
  field :update_image_description, mutation: Mutations::UpdateImageDescription
  field :create_image, mutation: Mutations::CreateImage
end
