require 'rails_helper'

RSpec.describe Types::UserType do
  let(:user) { create(:user) }
  let(:context) { { current_user: nil } }
  let(:fields) { described_class.fields }

  it 'has an id field of ID type' do
    expect(fields['id'].type.to_type_signature).to eq('ID!')
  end

  it 'has an email field of String type' do
    expect(fields['email'].type.to_type_signature).to eq('String')
  end

  describe 'creation' do
    let(:variables) do
      {
        email: 'test@example.com',
        password: 'password',
        username: 'testuser',
        biography: 'A test user.',
        avatarUrl: 'https://example.com/avatar.png'
      }
    end
    let(:create_user_mutation) do
      <<~GQL
        mutation($email: String!, $password: String!, $username: String!, $biography: String!, $avatarUrl: String) {
          userCreate(userInput: {email: $email, password: $password, username: $username, biography: $biography, avatarUrl: $avatarUrl}) {
            user {
              email
              username
              biography
              avatarUrl
            }
          }
        }
      GQL
    end

    it 'creates a new user' do
      # テストを実行する
      result = ApiSchema.execute(create_user_mutation, variables:, context:)

      # 結果を検証する
      expect(result.dig('data', 'userCreate', 'user')).to include(
        'email' => variables[:email],
        'username' => variables[:username],
        'biography' => variables[:biography],
        'avatarUrl' => variables[:avatarUrl]
      )
    end
  end

  describe 'updating' do
    it 'updates an existing user' do
      user.update(biography: 'updated')
      expect(user.biography).to eq('updated')
    end
  end

  describe 'query' do
    let!(:user) { create(:user) }
    let(:query) do
      <<~GQL
        query($id: ID!) {
          userById(id: $id) {
            id
            email
            username
            biography
            avatarUrl
          }
        }
      GQL
    end

    it 'returns a user by ID' do
      result = ApiSchema.execute(query, variables: { id: user.id }).to_h

      expect(result.dig('data', 'userById')).to include(
        'id' => user.id.to_s,
        'email' => user.email,
        'username' => user.username,
        'biography' => user.biography,
        'avatarUrl' => user.avatar_url
      )
    end
  end
end
