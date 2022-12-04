import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerASKNFTEA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ASKNFTEA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly awsUserId?: string | null;
  readonly nftDescription?: string | null;
  readonly nftImage?: string | null;
  readonly nftPrice?: number | null;
  readonly nftAssetOwner?: string | null;
  readonly nftPrevAssetOwner?: string | null;
  readonly nftAuctionDuration?: string | null;
  readonly nftContractAddress?: string | null;
  readonly nftLikes?: number | null;
  readonly nftId?: string | null;
  readonly awsUserPicture?: string | null;
  readonly awsName?: string | null;
  readonly nftWalletName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyASKNFTEA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ASKNFTEA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly awsUserId?: string | null;
  readonly nftDescription?: string | null;
  readonly nftImage?: string | null;
  readonly nftPrice?: number | null;
  readonly nftAssetOwner?: string | null;
  readonly nftPrevAssetOwner?: string | null;
  readonly nftAuctionDuration?: string | null;
  readonly nftContractAddress?: string | null;
  readonly nftLikes?: number | null;
  readonly nftId?: string | null;
  readonly awsUserPicture?: string | null;
  readonly awsName?: string | null;
  readonly nftWalletName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ASKNFTEA = LazyLoading extends LazyLoadingDisabled ? EagerASKNFTEA : LazyASKNFTEA

export declare const ASKNFTEA: (new (init: ModelInit<ASKNFTEA>) => ASKNFTEA) & {
  copyOf(source: ASKNFTEA, mutator: (draft: MutableModel<ASKNFTEA>) => MutableModel<ASKNFTEA> | void): ASKNFTEA;
}