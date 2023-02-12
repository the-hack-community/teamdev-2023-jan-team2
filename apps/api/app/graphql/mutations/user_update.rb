# frozen_string_literal: true

class Mutations::UserUpdate < BaseMutation
  description 'Updates a user by id'

  field :user, Types::UserType, null: false

  argument :id, ID, required: true
  argument :user_input, Types::UserInputType, required: true

  def resolve(id:, user_input:)
    user = ::User.find(id)
    raise GraphQL::ExecutionError.new 'Error updating user', extensions: user.errors.to_hash unless user.update(**user_input)

    { user: }
  end
end
