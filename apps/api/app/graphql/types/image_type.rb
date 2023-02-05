# frozen_string_literal: true

class Types::ImageType < Types::BaseObject
  field :id, ID, null: false
  field :user_id, Integer, null: false
  field :url, String
  field :description, String
  field :keyword, String
  field :prompt, String
  field :negative_prompt, String
  field :model, String
  field :steps, Integer
  field :sampler, String
  field :scale, Float
  field :seed, Float
  field :height, Integer
  field :width, Integer
  field :clip_skip, Integer
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
end
