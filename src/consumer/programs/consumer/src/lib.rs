use anchor_lang::prelude::*;
use switchboard_on_demand::on_demand::accounts::pull_feed::PullFeedAccountData;
use solana_program::clock::Clock;

declare_id!("DcobpthTUzWLBt8PPie4C6bzHfZRNY1LGGbz89ANXtUK");

// Feed account
#[derive(Accounts)]
pub struct Feed<'info> {
    pub feeFeedcountInfo<'info>,
}

#[program]
pub mod consumer {
    use super::*;

    pub fn consume<'a>(ctx: Context<Feed>) -> Result<()> {

        // Feed account data
        let feed_account = ctx.accounts.feed.data.borrow();

        // Verify that this account is the intended one by comparing public keys
        // if ctx.accounts.feed.key != &specific_pubkey {
        //     throwSomeError
        // }

        // Get the current clock from the Solana runtime
        let clock = solana_program::clock::Clock::get().map_err(|_| error!(ErrorCode::ClockError))?;

        // Docs at: https://switchboard-on-demand-rust-docs.web.app/on_demand/accounts/pull_feed/struct.PullFeedAccountData.html
        let feed = PullFeedAccountData::parse(feed_account).unwrap();
        // Log the value
        msg!("price: {:?}", feed.value(&clock));
        Ok(())
    }
}

#[error_code]
pub enum ErrorCode {
    #[msg("Failed to retrieve the clock.")]
    ClockError,
}