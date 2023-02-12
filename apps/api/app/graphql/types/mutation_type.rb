class Types::MutationType < Types::BaseObject
  field :image_create, mutation: Mutations::ImageCreate
  field :image_delete, mutation: Mutations::ImageDelete
  field :image_update, mutation: Mutations::ImageUpdate
  field :user_create, mutation: Mutations::UserCreate
  field :user_delete, mutation: Mutations::UserDelete
  field :user_update, mutation: Mutations::UserUpdate
end
