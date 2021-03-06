# How to speed up block minting when working on the local node.

When working with the local node by default, there are 21 seperate miners which means that every 15 seconds, your miner has a 1 in 21 chance of mining. This leads to a slow down of development. To modify how many miners there are, follow the instructions below:

NOTE: By rebuilding neb with the modifications below, neb will not be able to communicate with the testnet or mainnet. When needed, you can revert the changes below. Optionally, you can build a duplicate version of nebulas specific for the localnet.

1.  In the go-nebulas directory, delete the folder "data.db". If you do not have the folder, skip this step.
2.  Modify the file "consensus/dpos/dpos_state.go" and edit the line that says "DynastySize 21" and change it to "DynastySize 1". Save and exit.
3.  Modify the file conf/default/genesis.conf and only have one address in the dynasty list and that same address for token_distribution. Example:  

    <pre>consensus {
      dpos {
        dynasty: [
          "n1FF1nz6tarkDVwWQkMnnwFPuPKUaQTdptE"
        ]
      }
    }

    token_distribution [
      {
        address: "n1FF1nz6tarkDVwWQkMnnwFPuPKUaQTdptE"
        value: "5000000000000000000000000"
      }
    ]
    </pre>

    Save and exit.
4.  Re-compile neb with "make clean" followed by "make build"
5.  Execute neb as normal and you should now only have one miner and blocks consistently minted every 15 seconds.
