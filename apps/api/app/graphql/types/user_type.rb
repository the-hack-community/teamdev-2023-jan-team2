# frozen_string_literal: true

class Types::UserType < Types::BaseObject
  field :id, ID, null: false
  field :provider, String, null: false
  field :uid, String, null: false
  field :encrypted_password, String, null: false
  field :reset_password_token, String
  field :reset_password_sent_at, GraphQL::Types::ISO8601DateTime
  field :allow_password_change, Boolean
  field :remember_created_at, GraphQL::Types::ISO8601DateTime
  field :confirmation_token, String
  field :confirmed_at, GraphQL::Types::ISO8601DateTime
  field :confirmation_sent_at, GraphQL::Types::ISO8601DateTime
  field :unconfirmed_email, String
  field :name, String
  field :nickname, String
  field :image, String
  field :email, String
  field :biography, String
  field :tokens, GraphQL::Types::JSON
  field :images, [Types::ImageType]
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
end
