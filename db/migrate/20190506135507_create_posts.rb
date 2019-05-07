class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :content, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false
      t.integer :beer_id, null: false
      t.integer :venue_id

      t.timestamps
    end
    add_index :posts, :user_id
    add_index :posts, :beer_id
    add_index :posts, :venue_id
  end
end
