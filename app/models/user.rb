# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  f_name          :string           not null
#  l_name          :string           not null
#  location        :string
#  gender          :string
#  country         :string
#  birthday        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_st

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end
    
    attr_reader :password

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_st
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_st!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

end
