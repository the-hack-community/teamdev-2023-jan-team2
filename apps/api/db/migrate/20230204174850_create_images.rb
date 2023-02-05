class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.references :user, null: false, foreign_key: true
      t.string :url
      t.string :description
      t.string :keyword
      t.string :prompt
      t.string :negative_prompt
      t.string :model
      t.integer :steps
      t.string :sampler
      t.float :scale
      t.decimal :seed
      t.integer :height
      t.integer :width
      t.integer :clip_skip

      t.timestamps
    end
  end
end
