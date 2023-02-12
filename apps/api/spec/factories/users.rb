FactoryBot.define do
  factory :user do
    username { 'MyString' }
    email { 'MyString' }
    password_digest { 'MyString' }
    avatar_url { 'MyString' }
    biography { 'MyString' }
  end
end
