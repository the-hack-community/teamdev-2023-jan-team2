class Types::QueryType < Types::BaseObject
  # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
  include GraphQL::Types::Relay::HasNodeField
  include GraphQL::Types::Relay::HasNodesField

  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :users, [UserType], null: false, description: 'List all users'
  def users
    User.all
  end

  field :user, Types::UserType, null: false do
    argument :id, ID
  end

  def user(id:)
    User.find_by(id:)
  end

  field :images, [ImageType], null: false, description: 'List all images'
  def images
    Image.all
  end

  field :image, Types::ImageType, null: false do
    argument :id, ID
  end

  def image(id:)
    Image.find_by(id:)
  end

  field :images_by_keyword, [Types::ImageType], null: false do
    argument :keyword, String, required: true
  end

  def images_by_keyword(keyword:)
    Image.where('keyword LIKE ?', "%#{keyword}%")
  end
end
