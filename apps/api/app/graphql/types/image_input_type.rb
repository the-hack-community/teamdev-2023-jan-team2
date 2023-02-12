# frozen_string_literal: true

class Types::ImageInputType < Types::BaseInputObject
  argument :clip_skip, Integer, required: false
  argument :created_at, GraphQL::Types::ISO8601DateTime, required: false
  argument :description, String, required: false
  argument :height, Integer, required: false
  argument :id, ID, required: false
  argument :image_src, String, required: false
  argument :keyword, String, required: false
  argument :model, String, required: false
  argument :negative_prompt, String, required: false
  argument :prompt, String, required: false
  argument :sampler, String, required: false
  argument :scale, Float, required: false
  argument :seed, Float, required: false
  argument :steps, Integer, required: false
  argument :updated_at, GraphQL::Types::ISO8601DateTime, required: false
  argument :url, String, required: false
  argument :user_id, Integer, required: false
  argument :width, Integer, required: false
end
