import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BasicInstance = {
  __typename?: 'BasicInstance';
  _id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Case = {
  __typename?: 'Case';
  _id?: Maybe<Scalars['ID']>;
  brand?: Maybe<BasicInstance>;
  form_factor?: Maybe<BasicInstance>;
  model?: Maybe<Scalars['String']>;
  relatedMotherboards?: Maybe<Array<Maybe<Motherboards>>>;
};

export type Cpu = {
  __typename?: 'Cpu';
  _id?: Maybe<Scalars['ID']>;
  brand?: Maybe<BasicInstance>;
  core_clock?: Maybe<Scalars['Int']>;
  core_count?: Maybe<Scalars['Int']>;
  graphics?: Maybe<BasicInstance>;
  model?: Maybe<Scalars['String']>;
  ram_max?: Maybe<Scalars['Int']>;
  ram_speed?: Maybe<BasicInstance>;
  ram_type?: Maybe<BasicInstance>;
  relatedMotherboards?: Maybe<Array<Maybe<Motherboards>>>;
  relatedRam?: Maybe<Array<Maybe<Ram>>>;
  smt?: Maybe<Scalars['Boolean']>;
  socket?: Maybe<BasicInstance>;
  tdp?: Maybe<Scalars['Int']>;
};

export type Graphic = {
  __typename?: 'Graphic';
  _id?: Maybe<Scalars['ID']>;
  boost_clock?: Maybe<Scalars['Int']>;
  brand?: Maybe<BasicInstance>;
  chipset?: Maybe<Scalars['String']>;
  clock_speed?: Maybe<Scalars['Int']>;
  graphics_bus?: Maybe<BasicInstance>;
  length?: Maybe<Scalars['String']>;
  memory_capacity?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  relatedMotherboards?: Maybe<Array<Maybe<Motherboards>>>;
};

export type Motherboards = {
  __typename?: 'Motherboards';
  _id?: Maybe<Scalars['ID']>;
  brand?: Maybe<BasicInstance>;
  chipset?: Maybe<BasicInstance>;
  form_factor?: Maybe<BasicInstance>;
  graphics_bus?: Maybe<BasicInstance>;
  model?: Maybe<Scalars['String']>;
  ram_slots?: Maybe<Scalars['Int']>;
  relatedCases?: Maybe<Array<Maybe<Case>>>;
  relatedCpus?: Maybe<Array<Maybe<Cpu>>>;
  relatedGraphics?: Maybe<Array<Maybe<Graphic>>>;
  relatedRam?: Maybe<Array<Maybe<Ram>>>;
  socket?: Maybe<BasicInstance>;
};

export type PowerSupplier = {
  __typename?: 'PowerSupplier';
  _id?: Maybe<Scalars['ID']>;
  brand?: Maybe<BasicInstance>;
  form_factor?: Maybe<BasicInstance>;
  model?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCaseBy?: Maybe<Array<Maybe<Case>>>;
  getCpuBy?: Maybe<Array<Maybe<Cpu>>>;
  getGraphicBy?: Maybe<Array<Maybe<Graphic>>>;
  getMotherboardsBy?: Maybe<Array<Maybe<Motherboards>>>;
  getPowerSupplierBy?: Maybe<Array<Maybe<PowerSupplier>>>;
  getRamBy?: Maybe<Array<Maybe<Ram>>>;
  getStorageBy?: Maybe<Array<Maybe<Storage>>>;
};


export type QueryGetCaseByArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  brand?: InputMaybe<Scalars['ID']>;
  form_factor?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCpuByArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  brand?: InputMaybe<Scalars['ID']>;
  graphics?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  ram_speed?: InputMaybe<Scalars['ID']>;
  ram_type?: InputMaybe<Scalars['ID']>;
  socket?: InputMaybe<Scalars['ID']>;
};


export type QueryGetGraphicByArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  brand?: InputMaybe<Scalars['ID']>;
  graphics_bus?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetMotherboardsByArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  brand?: InputMaybe<Scalars['ID']>;
  chipset?: InputMaybe<Scalars['ID']>;
  form_factor?: InputMaybe<Scalars['ID']>;
  graphics_bus?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  socket?: InputMaybe<Scalars['ID']>;
};


export type QueryGetPowerSupplierByArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  brand?: InputMaybe<Scalars['ID']>;
  form_factor?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetRamByArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  brand?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Scalars['ID']>;
};


export type QueryGetStorageByArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  brand?: InputMaybe<Scalars['ID']>;
  form_factor?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  port?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Scalars['ID']>;
};

export type Ram = {
  __typename?: 'Ram';
  _id?: Maybe<Scalars['ID']>;
  brand?: Maybe<BasicInstance>;
  capacity?: Maybe<Scalars['Int']>;
  cas_latency?: Maybe<Scalars['Int']>;
  first_word_latency?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  modules?: Maybe<Scalars['Int']>;
  relatedMotherboards?: Maybe<Array<Maybe<Motherboards>>>;
  speed?: Maybe<BasicInstance>;
  type?: Maybe<BasicInstance>;
};

export type Storage = {
  __typename?: 'Storage';
  _id?: Maybe<Scalars['ID']>;
  brand?: Maybe<BasicInstance>;
  cache?: Maybe<Scalars['Int']>;
  capacity?: Maybe<Scalars['Int']>;
  form_factor?: Maybe<BasicInstance>;
  model?: Maybe<Scalars['String']>;
  port?: Maybe<BasicInstance>;
  type?: Maybe<BasicInstance>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BasicInstance: ResolverTypeWrapper<BasicInstance>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Case: ResolverTypeWrapper<Case>;
  Cpu: ResolverTypeWrapper<Cpu>;
  Graphic: ResolverTypeWrapper<Graphic>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Motherboards: ResolverTypeWrapper<Motherboards>;
  PowerSupplier: ResolverTypeWrapper<PowerSupplier>;
  Query: ResolverTypeWrapper<{}>;
  Ram: ResolverTypeWrapper<Ram>;
  Storage: ResolverTypeWrapper<Storage>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BasicInstance: BasicInstance;
  Boolean: Scalars['Boolean'];
  Case: Case;
  Cpu: Cpu;
  Graphic: Graphic;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Motherboards: Motherboards;
  PowerSupplier: PowerSupplier;
  Query: {};
  Ram: Ram;
  Storage: Storage;
  String: Scalars['String'];
};

export type BasicInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicInstance'] = ResolversParentTypes['BasicInstance']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Case'] = ResolversParentTypes['Case']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  form_factor?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedMotherboards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Motherboards']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CpuResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cpu'] = ResolversParentTypes['Cpu']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  core_clock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  core_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  graphics?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ram_max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ram_speed?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  ram_type?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  relatedMotherboards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Motherboards']>>>, ParentType, ContextType>;
  relatedRam?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ram']>>>, ParentType, ContextType>;
  smt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  socket?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  tdp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Graphic'] = ResolversParentTypes['Graphic']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  boost_clock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  chipset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clock_speed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  graphics_bus?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  memory_capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedMotherboards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Motherboards']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MotherboardsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Motherboards'] = ResolversParentTypes['Motherboards']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  chipset?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  form_factor?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  graphics_bus?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ram_slots?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  relatedCases?: Resolver<Maybe<Array<Maybe<ResolversTypes['Case']>>>, ParentType, ContextType>;
  relatedCpus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cpu']>>>, ParentType, ContextType>;
  relatedGraphics?: Resolver<Maybe<Array<Maybe<ResolversTypes['Graphic']>>>, ParentType, ContextType>;
  relatedRam?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ram']>>>, ParentType, ContextType>;
  socket?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PowerSupplierResolvers<ContextType = any, ParentType extends ResolversParentTypes['PowerSupplier'] = ResolversParentTypes['PowerSupplier']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  form_factor?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCaseBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Case']>>>, ParentType, ContextType, Partial<QueryGetCaseByArgs>>;
  getCpuBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cpu']>>>, ParentType, ContextType, Partial<QueryGetCpuByArgs>>;
  getGraphicBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Graphic']>>>, ParentType, ContextType, Partial<QueryGetGraphicByArgs>>;
  getMotherboardsBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Motherboards']>>>, ParentType, ContextType, Partial<QueryGetMotherboardsByArgs>>;
  getPowerSupplierBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['PowerSupplier']>>>, ParentType, ContextType, Partial<QueryGetPowerSupplierByArgs>>;
  getRamBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ram']>>>, ParentType, ContextType, Partial<QueryGetRamByArgs>>;
  getStorageBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Storage']>>>, ParentType, ContextType, Partial<QueryGetStorageByArgs>>;
};

export type RamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ram'] = ResolversParentTypes['Ram']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cas_latency?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  first_word_latency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modules?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  relatedMotherboards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Motherboards']>>>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Storage'] = ResolversParentTypes['Storage']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  cache?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  form_factor?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['BasicInstance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BasicInstance?: BasicInstanceResolvers<ContextType>;
  Case?: CaseResolvers<ContextType>;
  Cpu?: CpuResolvers<ContextType>;
  Graphic?: GraphicResolvers<ContextType>;
  Motherboards?: MotherboardsResolvers<ContextType>;
  PowerSupplier?: PowerSupplierResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Ram?: RamResolvers<ContextType>;
  Storage?: StorageResolvers<ContextType>;
};

