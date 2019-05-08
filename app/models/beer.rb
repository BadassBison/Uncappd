# == Schema Information
#
# Table name: beers
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  beer_type  :string           not null
#  brewery_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Beer < ApplicationRecord

    validates :name, :beer_type, :brewery_id, presence: true

    belongs_to :brewery
    has_many :posts
    
end
