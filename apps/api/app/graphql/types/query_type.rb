class Types::QueryType < Types::BaseObject
  include GraphQL::Types::Relay::HasNodeField
  include GraphQL::Types::Relay::HasNodesField

  field :all_users, [Types::UserType], null: false, description: 'List all users'

  field :all_images, [Types::ImageType], null: false, description: 'List all images' do
    argument :order, String, required: false
  end

  field :user_by_id, Types::UserType, null: false, description: 'Search User by ID' do
    argument :id, ID, required: true
  end

  field :user_by_email, Types::UserType, null: false, description: 'Search User by Email' do
    argument :email, String
  end

  field :image_by_id, Types::ImageType, null: false, description: 'Search Image by ID' do
    argument :id, ID
  end

  field :images_by_keyword, [Types::ImageType], null: false, description: 'Search Images by Keyword' do
    argument :keyword, String, required: true
  end

  field :user_by_credential, Types::UserType, null: false, description: 'Retrieve authenticated user' do
    argument :email, String, required: true
    argument :password, String, required: true
  end

  def all_users
    User.all
  end

  def all_images(order: nil)
    images = Image.all
    images = images.order(created_at: :desc) if order == 'newest'
    images = images.order(created_at: :asc) if order == 'oldest'
    images
  end

  def user_by_id(id:)
    User.find_by(id:)
  end

  def user_by_email(email:)
    User.find_by(email:)
  end

  def image_by_id(id:)
    Image.find_by(id:)
  end

  def images_by_keyword(keyword:)
    Image.where('keyword LIKE ?', "%#{keyword}%")
  end

  def user_by_credential(email:, password:)
    User.where(email:).first&.authenticate(password)
  end
end
