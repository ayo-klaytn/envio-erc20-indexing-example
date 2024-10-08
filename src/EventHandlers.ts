import { Evoor, TokenApproval, TokenOwnershipTransferred, TokenTransfer } from "generated";


Evoor.Approval.handler(async ({ event, context }) => {
  const entity: TokenApproval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.TokenApproval.set(entity);
});


Evoor.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: TokenOwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.TokenOwnershipTransferred.set(entity);
});


Evoor.Transfer.handler(async ({ event, context }) => {
  const entity: TokenTransfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.TokenTransfer.set(entity);
  }
);
