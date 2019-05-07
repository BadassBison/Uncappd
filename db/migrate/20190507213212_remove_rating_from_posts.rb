class RemoveRatingFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :rating
  end
end
