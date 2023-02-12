# frozen_string_literal: true

class Types::UserInputType < Types::BaseInputObject
  argument :avatar_url, String, required: false
  argument :biography, String, required: false
  argument :created_at, GraphQL::Types::ISO8601DateTime, required: false
  argument :email, String, required: false
  argument :id, ID, required: false
  argument :password, String, required: false
  argument :updated_at, GraphQL::Types::ISO8601DateTime, required: false
  argument :username, String, required: false
end
