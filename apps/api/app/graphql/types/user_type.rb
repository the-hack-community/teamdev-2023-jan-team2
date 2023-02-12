# frozen_string_literal: true

class Types::UserType < Types::BaseObject
  field :avatar_url, String
  field :biography, String
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :email, String
  field :id, ID, null: false
  field :images, [Types::ImageType]
  field :password, String
  field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  field :username, String
end
