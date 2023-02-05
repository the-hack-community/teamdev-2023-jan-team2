# users = [
#   {
#     id: 1,
#     provider: 'email',
#     uid: '',
#     encrypted_password: '',
#     reset_password_token: ''
#   }
# ]
#
# users.each do |user|
#   # User.find_or_create_by(user)
# end

# users_image = User.create(users)

images = [
  {
    id: 1,
    user: User.find_by(uid: 'test@example.com'),
    url: '0002',
    description: 'sample description',
    keyword: 'sample keyword',
    prompt: 'sample prompt',
    negative_prompt: 'sample negative prompt',
    model: 'stable diffusion',
    steps: 50,
    sampler: 'ddim',
    scale: 8.5,
    seed: 3_691_630_786,
    height: 512,
    width: 512,
    clip_skip: 2
  }
]

images.each do |image|
  Image.find_or_create_by(image)
end
