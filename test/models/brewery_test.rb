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

require 'test_helper'

class BreweryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
