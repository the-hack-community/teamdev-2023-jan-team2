require 'rails_helper'

RSpec.describe User do
  describe 'userById' do
    it 'returns a user by ID' do
      query_string = <<-GRAPHQL
        query ($id: ID!) {
          userById(id: $id) {
            id
          }
        }
      GRAPHQL
      result = ApiSchema.execute(query_string, variables: { id: 1 })
      user_result = result['data']['userById']
      expect(user_result['id']).to eq '1'
    end
  end
end
