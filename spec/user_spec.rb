require File.expand_path(File.dirname(__FILE__) + '/spec_helper')

describe "Twitter User" do
	describe "with a username" do
		before( :each ) do
			@user = User.new
			@user.twitter_username = 'fjodorekstrom'
		end

		it "provides the last five tweets from Twitter" do
			tweets = [
				{:text => 'tweet1'},
				{:text => 'tweet2'},
				{:text => 'tweet3'},
				{:text => 'tweet4'},
				{:text => 'tweet5'}
			]

			mock_client = mock('client')
			mock_client.should_receive(:per_page).with(5).and_return(mock_clients)
			mock_client.should_receive(:from).with('fjodorekstrom').and_return(tweets)
			Twitter::Search.should_receive(:new).and_return(mock_client)

			@user.last_five_tweets.should == %w{tweet1 tweet2 tweet3 tweet4 tweet5}
		end
	end
end