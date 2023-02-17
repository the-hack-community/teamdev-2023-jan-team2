require 'rails_helper'

RSpec.describe Image do
  let(:user) { create(:user) }

  describe 'creation' do
    it 'creates a new image' do
      expect do
        user.images.create
      end.to change(described_class, :count).by(1)
    end
  end

  describe 'updating' do
    it 'updates an existing image' do
      image = user.images.create(keyword: 'test')
      image.update(keyword: 'updated')
      expect(image.keyword).to eq('updated')
    end
  end

  describe 'query' do
    it 'returns an image by ID' do
      user = create(:user)
      image = create(:image, user:)

      query = <<~QUERY
        query ImageById($id: ID!) {
          imageById(id: $id) {
            keyword
          }
        }
      QUERY

      result = ApiSchema.execute(query, variables: { id: image.id }).to_h

      expect(result['data']['imageById']['keyword']).to eq(image.keyword)
    end
  end
end
