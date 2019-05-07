# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  content    :string           not null
#  rating     :integer          not null
#  user_id    :integer          not null
#  beer_id    :integer          not null
#  venue_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord

    validates :content, :rating, :user_id, :beer_id, venue_id,  presence: true

    belongs_to :user
    belongs_to :beer
    belongs_to :venue
    
end
