# frozen_string_literal: true

class Types::ImageType < Types::BaseObject
  field :clip_skip, Integer
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :description, String
  field :height, Integer
  field :id, ID, null: false
  field :image_src, String
  field :keyword, String
  field :model, String
  field :negative_prompt, String
  field :prompt, String
  field :sampler, String
  field :scale, Float
  field :seed, Float
  field :steps, Integer
  field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  field :url, String
  field :user_id, Integer, null: false
  field :width, Integer
end
