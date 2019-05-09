# == Schema Information
#
# Table name: venues
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  location   :string           not null
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Venue < ApplicationRecord

    validates :name, :location, :category, presence: true

    has_many :posts
    has_one_attached :photo

end
