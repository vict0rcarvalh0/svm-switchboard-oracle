use anchor_lang::prelude::*;
use switchboard_on_demand::on_demand::accounts::pull_feed::PullFeedAccountData;

declare_id!("DcobpthTUzWLBt8PPie4C6bzHfZRNY1LGGbz89ANXtUK");

// Include the feed account
#[derive(Accounts)]
pub struct Test<'info> {
    pub feed: AccountInfo<'info>,
}

#[program]
pub mod consumer {
    use super::*;

    pub fn consume<'a>(ctx: Context<Test>) -> Result<()> {

        // Feed account data
        let feed_account = ctx.accounts.feed.data.borrow();

        // Verify that this account is the intended one by comparing public keys
        // if ctx.accounts.feed.key != &specific_pubkey {
        //     throwSomeError
        // }

        // Docs at: https://switchboard-on-demand-rust-docs.web.app/on_demand/accounts/pull_feed/struct.PullFeedAccountData.html
        let feed = PullFeedAccountData::parse(feed_account).unwrap();
        // Log the value
        msg!("price: {:?}", feed.value());
        Ok(())
    }
}