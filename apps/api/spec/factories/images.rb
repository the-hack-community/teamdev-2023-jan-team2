FactoryBot.define do
  factory :image do
    user { nil }
    url { 'MyString' }
    description { 'MyString' }
    keyword { 'MyString' }
    prompt { 'MyString' }
    negative_prompt { 'MyString' }
    model { 'MyString' }
    steps { 1 }
    sampler { 'MyString' }
    scale { 1.5 }
    seed { '9.99' }
    height { 1 }
    width { 1 }
    clip_skip { 1 }
    image_src { 'MyString' }
  end
end
