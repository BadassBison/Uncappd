# == Schema Information
#
# Table name: breweries
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  location   :string           not null
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Brewery < ApplicationRecord

    validates :name, :location, :category, presence: true

    has_many :beers
    has_many :posts

end
