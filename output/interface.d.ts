export interface ApiUsage {
    apiCalls: array;
throttledRequests: array;
  }

export interface Series {
    datapoints: array;
target: string;
  }

export interface Datapoint {
    time: string;
count: number;
  }

export interface Application {
    applicationId: number;
name: string;
redirectUrl: string;
link: string;
scope: number;
origin: string;
status: number;
creationDate: string;
statusChanged: string;
firstPublished: string;
team: array;
overrideAuthorizeViewName: string;
  }

export interface ApplicationDeveloper {
    role: number;
apiEulaVersion: number;
user: undefined;
  }

export interface UserMembership {
    membershipType: number;
membershipId: number;
displayName: string;
bungieGlobalDisplayName: string;
bungieGlobalDisplayNameCode: number;
  }

export interface CrossSaveUserMembership {
    crossSaveOverride: number;
applicableMembershipTypes: array;
isPublic: boolean;
membershipType: number;
membershipId: number;
displayName: string;
bungieGlobalDisplayName: string;
bungieGlobalDisplayNameCode: number;
  }

export interface UserInfoCard {
    supplementalDisplayName: string;
iconPath: string;
crossSaveOverride: number;
applicableMembershipTypes: array;
isPublic: boolean;
membershipType: number;
membershipId: number;
displayName: string;
bungieGlobalDisplayName: string;
bungieGlobalDisplayNameCode: number;
  }

export interface GeneralUser {
    membershipId: number;
uniqueName: string;
normalizedName: string;
displayName: string;
profilePicture: number;
profileTheme: number;
userTitle: number;
successMessageFlags: number;
isDeleted: boolean;
about: string;
firstAccess: string;
lastUpdate: string;
legacyPortalUID: number;
context: undefined;
psnDisplayName: string;
xboxDisplayName: string;
fbDisplayName: string;
showActivity: boolean;
locale: string;
localeInheritDefault: boolean;
lastBanReportId: number;
showGroupMessaging: boolean;
profilePicturePath: string;
profilePictureWidePath: string;
profileThemeName: string;
userTitleDisplay: string;
statusText: string;
statusDate: string;
profileBanExpire: string;
blizzardDisplayName: string;
steamDisplayName: string;
stadiaDisplayName: string;
twitchDisplayName: string;
cachedBungieGlobalDisplayName: string;
cachedBungieGlobalDisplayNameCode: number;
  }

export interface UserToUserContext {
    isFollowing: boolean;
ignoreStatus: undefined;
globalIgnoreEndDate: string;
  }

export interface GetCredentialTypesForAccountResponse {
    credentialType: number;
credentialDisplayName: string;
isPublic: boolean;
credentialAsString: string;
  }

export interface UserMembershipData {
    destinyMemberships: array;
primaryMembershipId: number;
bungieNetUser: undefined;
  }

export interface HardLinkedUserMembership {
    membershipType: number;
membershipId: number;
CrossSaveOverriddenType: number;
CrossSaveOverriddenMembershipId: number;
  }

export interface UserSearchResponse {
    searchResults: array;
page: number;
hasMore: boolean;
  }

export interface UserSearchResponseDetail {
    bungieGlobalDisplayName: string;
bungieGlobalDisplayNameCode: number;
bungieNetMembershipId: number;
destinyMemberships: array;
  }

export interface UserSearchPrefixRequest {
    displayNamePrefix: string;
  }

export interface ExactSearchRequest {
    displayName: string;
displayNameCode: number;
  }

export interface EmailSettings {
    optInDefinitions: object;
subscriptionDefinitions: object;
views: object;
  }

export interface EmailOptInDefinition {
    name: string;
value: number;
setByDefault: boolean;
dependentSubscriptions: array;
  }

export interface EmailSubscriptionDefinition {
    name: string;
localization: object;
value: number;
  }

export interface EMailSettingLocalization {
    title: string;
description: string;
  }

export interface EMailSettingSubscriptionLocalization {
    unknownUserDescription: string;
registeredUserDescription: string;
unregisteredUserDescription: string;
unknownUserActionText: string;
knownUserActionText: string;
title: string;
description: string;
  }

export interface EmailViewDefinition {
    name: string;
viewSettings: array;
  }

export interface EmailViewDefinitionSetting {
    name: string;
localization: object;
setByDefault: boolean;
optInAggregateValue: number;
subscriptions: array;
  }

export interface IgnoreResponse {
    isIgnored: boolean;
ignoreFlags: number;
  }

export interface UserTheme {
    userThemeId: number;
userThemeName: string;
userThemeDescription: string;
  }

export interface GroupTheme {
    name: string;
folder: string;
description: string;
  }

export interface ClanBannerDecal {
    identifier: string;
foregroundPath: string;
backgroundPath: string;
  }

export interface GroupUserInfoCard {
    LastSeenDisplayName: string;
LastSeenDisplayNameType: number;
supplementalDisplayName: string;
iconPath: string;
crossSaveOverride: number;
applicableMembershipTypes: array;
isPublic: boolean;
membershipType: number;
membershipId: number;
displayName: string;
bungieGlobalDisplayName: string;
bungieGlobalDisplayNameCode: number;
  }

export interface GroupResponse {
    detail: undefined;
founder: undefined;
alliedIds: array;
parentGroup: undefined;
allianceStatus: number;
groupJoinInviteCount: number;
currentUserMembershipsInactiveForDestiny: boolean;
currentUserMemberMap: object;
currentUserPotentialMemberMap: object;
  }

export interface GroupV2 {
    groupId: number;
name: string;
groupType: number;
membershipIdCreated: number;
creationDate: string;
modificationDate: string;
about: string;
tags: array;
memberCount: number;
isPublic: boolean;
isPublicTopicAdminOnly: boolean;
motto: string;
allowChat: boolean;
isDefaultPostPublic: boolean;
chatSecurity: number;
locale: string;
avatarImageIndex: number;
homepage: number;
membershipOption: number;
defaultPublicity: number;
theme: string;
bannerPath: string;
avatarPath: string;
conversationId: number;
enableInvitationMessagingForAdmins: boolean;
banExpireDate: string;
features: undefined;
clanInfo: undefined;
  }

export interface GroupFeatures {
    maximumMembers: number;
maximumMembershipsOfGroupType: number;
capabilities: number;
membershipTypes: array;
invitePermissionOverride: boolean;
updateCulturePermissionOverride: boolean;
hostGuidedGamePermissionOverride: number;
updateBannerPermissionOverride: boolean;
joinLevel: number;
  }

export interface GroupV2ClanInfo {
    clanCallsign: string;
clanBannerData: undefined;
  }

export interface ClanBanner {
    decalId: number;
decalColorId: number;
decalBackgroundColorId: number;
gonfalonId: number;
gonfalonColorId: number;
gonfalonDetailId: number;
gonfalonDetailColorId: number;
  }

export interface GroupV2ClanInfoAndInvestment {
    d2ClanProgressions: object;
clanCallsign: string;
clanBannerData: undefined;
  }

export interface GroupUserBase {
    groupId: number;
destinyUserInfo: undefined;
bungieNetUserInfo: undefined;
joinDate: string;
  }

export interface GroupMember {
    memberType: number;
isOnline: boolean;
lastOnlineStatusChange: number;
groupId: number;
destinyUserInfo: undefined;
bungieNetUserInfo: undefined;
joinDate: string;
  }

export interface GroupPotentialMember {
    potentialStatus: number;
groupId: number;
destinyUserInfo: undefined;
bungieNetUserInfo: undefined;
joinDate: string;
  }

export interface GroupV2Card {
    groupId: number;
name: string;
groupType: number;
creationDate: string;
about: string;
motto: string;
memberCount: number;
locale: string;
membershipOption: number;
capabilities: number;
clanInfo: undefined;
avatarPath: string;
theme: string;
  }

export interface GroupSearchResponse {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface GroupQuery {
    name: string;
groupType: number;
creationDate: number;
sortBy: number;
groupMemberCountFilter: number;
localeFilter: string;
tagText: string;
itemsPerPage: number;
currentPage: number;
requestContinuationToken: string;
  }

export interface GroupNameSearchRequest {
    groupName: string;
groupType: number;
  }

export interface GroupOptionalConversation {
    groupId: number;
conversationId: number;
chatEnabled: boolean;
chatName: string;
chatSecurity: number;
  }

export interface GroupEditAction {
    name: string;
about: string;
motto: string;
theme: string;
avatarImageIndex: number;
tags: string;
isPublic: boolean;
membershipOption: number;
isPublicTopicAdminOnly: boolean;
allowChat: boolean;
chatSecurity: number;
callsign: string;
locale: string;
homepage: number;
enableInvitationMessagingForAdmins: boolean;
defaultPublicity: number;
  }

export interface GroupOptionsEditAction {
    InvitePermissionOverride: boolean;
UpdateCulturePermissionOverride: boolean;
HostGuidedGamePermissionOverride: number;
UpdateBannerPermissionOverride: boolean;
JoinLevel: number;
  }

export interface GroupOptionalConversationAddRequest {
    chatName: string;
chatSecurity: number;
  }

export interface GroupOptionalConversationEditRequest {
    chatEnabled: boolean;
chatName: string;
chatSecurity: number;
  }

export interface GroupMemberLeaveResult {
    group: undefined;
groupDeleted: boolean;
  }

export interface GroupBanRequest {
    comment: string;
length: number;
  }

export interface GroupBan {
    groupId: number;
lastModifiedBy: undefined;
createdBy: undefined;
dateBanned: string;
dateExpires: string;
comment: string;
bungieNetUserInfo: undefined;
destinyUserInfo: undefined;
  }

export interface GroupMemberApplication {
    groupId: number;
creationDate: string;
resolveState: number;
resolveDate: string;
resolvedByMembershipId: number;
requestMessage: string;
resolveMessage: string;
destinyUserInfo: undefined;
bungieNetUserInfo: undefined;
  }

export interface GroupApplicationRequest {
    message: string;
  }

export interface GroupApplicationListRequest {
    memberships: array;
message: string;
  }

export interface GroupMembershipBase {
    group: undefined;
  }

export interface GroupMembership {
    member: undefined;
group: undefined;
  }

export interface GroupMembershipSearchResponse {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface GetGroupsForMemberResponse {
    areAllMembershipsInactive: object;
results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface GroupPotentialMembership {
    member: undefined;
group: undefined;
  }

export interface GroupPotentialMembershipSearchResponse {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface GroupApplicationResponse {
    resolution: number;
  }

export interface ContentTypeDescription {
    cType: string;
name: string;
contentDescription: string;
previewImage: string;
priority: number;
reminder: string;
properties: array;
tagMetadata: array;
tagMetadataItems: object;
usageExamples: array;
showInContentEditor: boolean;
typeOf: string;
bindIdentifierToProperty: string;
boundRegex: string;
forceIdentifierBinding: boolean;
allowComments: boolean;
autoEnglishPropertyFallback: boolean;
bulkUploadable: boolean;
previews: array;
suppressCmsPath: boolean;
propertySections: array;
  }

export interface ContentTypeProperty {
    name: string;
rootPropertyName: string;
readableName: string;
value: string;
propertyDescription: string;
localizable: boolean;
fallback: boolean;
enabled: boolean;
order: number;
visible: boolean;
isTitle: boolean;
required: boolean;
maxLength: number;
maxByteLength: number;
maxFileSize: number;
regexp: string;
validateAs: string;
rssAttribute: string;
visibleDependency: string;
visibleOn: string;
datatype: number;
attributes: object;
childProperties: array;
contentTypeAllowed: string;
bindToProperty: string;
boundRegex: string;
representationSelection: object;
defaultValues: array;
isExternalAllowed: boolean;
propertySection: string;
weight: number;
entitytype: string;
isCombo: boolean;
suppressProperty: boolean;
legalContentTypes: array;
representationValidationString: string;
minWidth: number;
maxWidth: number;
minHeight: number;
maxHeight: number;
isVideo: boolean;
isImage: boolean;
  }

export interface ContentTypeDefaultValue {
    whenClause: string;
whenValue: string;
defaultValue: string;
  }

export interface TagMetadataDefinition {
    description: string;
order: number;
items: array;
datatype: string;
name: string;
isRequired: boolean;
  }

export interface TagMetadataItem {
    description: string;
tagText: string;
groups: array;
isDefault: boolean;
name: string;
  }

export interface ContentPreview {
    name: string;
path: string;
itemInSet: boolean;
setTag: string;
setNesting: number;
useSetId: number;
  }

export interface ContentTypePropertySection {
    name: string;
readableName: string;
collapsed: boolean;
  }

export interface ContentItemPublicContract {
    contentId: number;
cType: string;
cmsPath: string;
creationDate: string;
modifyDate: string;
allowComments: boolean;
hasAgeGate: boolean;
minimumAge: number;
ratingImagePath: string;
author: undefined;
autoEnglishPropertyFallback: boolean;
properties: object;
representations: array;
tags: array;
commentSummary: undefined;
  }

export interface ContentRepresentation {
    name: string;
path: string;
validationString: string;
  }

export interface CommentSummary {
    topicId: number;
commentCount: number;
  }

export interface NewsArticleRssResponse {
    NewsArticles: array;
CurrentPaginationToken: number;
NextPaginationToken: number;
ResultCountThisPage: number;
  }

export interface NewsArticleRssItem {
    Title: string;
Link: string;
PubDate: string;
UniqueIdentifier: string;
Description: string;
  }

export interface SearchResult {
    totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface PagedQuery {
    itemsPerPage: number;
currentPage: number;
requestContinuationToken: string;
  }

export interface SearchResultOfContentItemPublicContract {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface PostResponse {
    lastReplyTimestamp: string;
IsPinned: boolean;
urlMediaType: number;
thumbnail: string;
popularity: number;
isActive: boolean;
isAnnouncement: boolean;
userRating: number;
userHasRated: boolean;
userHasMutedPost: boolean;
latestReplyPostId: number;
latestReplyAuthorId: number;
ignoreStatus: undefined;
locale: string;
  }

export interface PostSearchResponse {
    relatedPosts: array;
authors: array;
groups: array;
searchedTags: array;
polls: array;
recruitmentDetails: array;
availablePages: number;
results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface PollResponse {
    topicId: number;
results: array;
totalVotes: number;
  }

export interface PollResult {
    answerText: string;
answerSlot: number;
lastVoteDate: string;
votes: number;
requestingUserVoted: boolean;
  }

export interface ForumRecruitmentDetail {
    topicId: number;
microphoneRequired: boolean;
intensity: number;
tone: number;
approved: boolean;
conversationId: number;
playerSlotsTotal: number;
playerSlotsRemaining: number;
Fireteam: array;
kickedPlayerIds: array;
  }

export interface SearchResultOfPostResponse {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface DestinyProgression {
    progressionHash: number;
dailyProgress: number;
dailyLimit: number;
weeklyProgress: number;
weeklyLimit: number;
currentProgress: number;
level: number;
levelCap: number;
stepIndex: number;
progressToNextLevel: number;
nextLevelAt: number;
currentResetCount: number;
seasonResets: array;
rewardItemStates: array;
  }

export interface DestinyProgressionResetEntry {
    season: number;
resets: number;
  }

export interface DestinyDefinition {
    hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyProgressionDefinition {
    displayProperties: undefined;
scope: number;
repeatLastStep: boolean;
source: string;
steps: array;
visible: boolean;
factionHash: number;
color: object;
rankIcon: string;
rewardItems: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyDisplayPropertiesDefinition {
    description: string;
name: string;
icon: string;
iconSequences: array;
highResIcon: string;
hasIcon: boolean;
  }

export interface DestinyIconSequenceDefinition {
    frames: array;
  }

export interface DestinyProgressionDisplayPropertiesDefinition {
    displayUnitsName: string;
description: string;
name: string;
icon: string;
iconSequences: array;
highResIcon: string;
hasIcon: boolean;
  }

export interface DestinyProgressionStepDefinition {
    stepName: string;
displayEffectType: number;
progressTotal: number;
rewardItems: array;
icon: string;
  }

export interface DestinyItemQuantity {
    itemHash: number;
itemInstanceId: number;
quantity: number;
hasConditionalVisibility: boolean;
  }

export interface DestinyInventoryItemDefinition {
    displayProperties: undefined;
tooltipNotifications: array;
collectibleHash: number;
iconWatermark: string;
iconWatermarkShelved: string;
secondaryIcon: string;
secondaryOverlay: string;
secondarySpecial: string;
backgroundColor: object;
screenshot: string;
itemTypeDisplayName: string;
flavorText: string;
uiItemDisplayStyle: string;
itemTypeAndTierDisplayName: string;
displaySource: string;
tooltipStyle: string;
action: object;
crafting: object;
inventory: object;
setData: object;
stats: object;
emblemObjectiveHash: number;
equippingBlock: object;
translationBlock: object;
preview: object;
quality: object;
value: object;
sourceData: object;
objectives: object;
metrics: object;
plug: object;
gearset: object;
sack: object;
sockets: object;
summary: object;
talentGrid: object;
investmentStats: array;
perks: array;
loreHash: number;
summaryItemHash: number;
animations: array;
allowActions: boolean;
links: array;
doesPostmasterPullHaveSideEffects: boolean;
nonTransferrable: boolean;
itemCategoryHashes: array;
specialItemType: number;
itemType: number;
itemSubType: number;
classType: number;
breakerType: number;
breakerTypeHash: number;
equippable: boolean;
damageTypeHashes: array;
damageTypes: array;
defaultDamageType: number;
defaultDamageTypeHash: number;
seasonHash: number;
isWrapper: boolean;
traitIds: array;
traitHashes: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyItemTooltipNotification {
    displayString: string;
displayStyle: string;
  }

export interface DestinyColor {
    red: string;
green: string;
blue: string;
alpha: string;
  }

export interface DestinyItemActionBlockDefinition {
    verbName: string;
verbDescription: string;
isPositive: boolean;
overlayScreenName: string;
overlayIcon: string;
requiredCooldownSeconds: number;
requiredItems: array;
progressionRewards: array;
actionTypeLabel: string;
requiredLocation: string;
requiredCooldownHash: number;
deleteOnAction: boolean;
consumeEntireStack: boolean;
useOnAcquire: boolean;
  }

export interface DestinyItemActionRequiredItemDefinition {
    count: number;
itemHash: number;
deleteOnAction: boolean;
  }

export interface DestinyProgressionRewardDefinition {
    progressionMappingHash: number;
amount: number;
applyThrottles: boolean;
  }

export interface DestinyProgressionMappingDefinition {
    displayProperties: object;
displayUnits: string;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyItemCraftingBlockDefinition {
    outputItemHash: number;
requiredSocketTypeHashes: array;
failedRequirementStrings: array;
baseMaterialRequirements: number;
bonusPlugs: array;
  }

export interface DestinyItemCraftingBlockBonusPlugDefinition {
    socketTypeHash: number;
plugItemHash: number;
  }

export interface DestinySocketTypeDefinition {
    displayProperties: object;
insertAction: object;
plugWhitelist: array;
socketCategoryHash: number;
visibility: number;
alwaysRandomizeSockets: boolean;
isPreviewEnabled: boolean;
hideDuplicateReusablePlugs: boolean;
overridesUiAppearance: boolean;
avoidDuplicatesOnInitialization: boolean;
currencyScalars: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyInsertPlugActionDefinition {
    actionExecuteSeconds: number;
actionType: number;
  }

export interface DestinyPlugWhitelistEntryDefinition {
    categoryHash: number;
categoryIdentifier: string;
reinitializationPossiblePlugHashes: array;
  }

export interface DestinySocketTypeScalarMaterialRequirementEntry {
    currencyItemHash: number;
scalarValue: number;
  }

export interface DestinySocketCategoryDefinition {
    displayProperties: undefined;
uiCategoryStyle: number;
categoryStyle: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyMaterialRequirementSetDefinition {
    materials: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyMaterialRequirement {
    itemHash: number;
deleteOnAction: boolean;
count: number;
countIsConstant: boolean;
omitFromRequirements: boolean;
  }

export interface DestinyItemInventoryBlockDefinition {
    stackUniqueLabel: string;
maxStackSize: number;
bucketTypeHash: number;
recoveryBucketTypeHash: number;
tierTypeHash: number;
isInstanceItem: boolean;
tierTypeName: string;
tierType: number;
expirationTooltip: string;
expiredInActivityMessage: string;
expiredInOrbitMessage: string;
suppressExpirationWhenObjectivesComplete: boolean;
recipeItemHash: number;
  }

export interface DestinyInventoryBucketDefinition {
    displayProperties: undefined;
scope: number;
category: number;
bucketOrder: number;
itemCount: number;
location: number;
hasTransferDestination: boolean;
enabled: boolean;
fifo: boolean;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyItemTierTypeDefinition {
    displayProperties: undefined;
infusionProcess: object;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyItemTierTypeInfusionBlock {
    baseQualityTransferRatio: number;
minimumQualityIncrement: number;
  }

export interface DestinyItemSetBlockDefinition {
    itemList: array;
requireOrderedSetItemAdd: boolean;
setIsFeatured: boolean;
setType: string;
questLineName: string;
questLineDescription: string;
questStepSummary: string;
  }

export interface DestinyItemSetBlockEntryDefinition {
    trackingValue: number;
itemHash: number;
  }

export interface DestinyItemStatBlockDefinition {
    disablePrimaryStatDisplay: boolean;
statGroupHash: number;
stats: object;
hasDisplayableStats: boolean;
primaryBaseStatHash: number;
  }

export interface DestinyInventoryItemStatDefinition {
    statHash: number;
value: number;
minimum: number;
maximum: number;
displayMaximum: number;
  }

export interface DestinyStatDefinition {
    displayProperties: undefined;
aggregationType: number;
hasComputedBlock: boolean;
statCategory: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyStatGroupDefinition {
    maximumValue: number;
uiPosition: number;
scaledStats: array;
overrides: object;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyStatDisplayDefinition {
    statHash: number;
maximumValue: number;
displayAsNumeric: boolean;
displayInterpolation: array;
  }

export interface DestinyStatOverrideDefinition {
    statHash: number;
displayProperties: object;
  }

export interface DestinyEquippingBlockDefinition {
    gearsetItemHash: number;
uniqueLabel: string;
uniqueLabelHash: number;
equipmentSlotTypeHash: number;
attributes: number;
ammoType: number;
displayStrings: array;
  }

export interface DestinyEquipmentSlotDefinition {
    displayProperties: undefined;
equipmentCategoryHash: number;
bucketTypeHash: number;
applyCustomArtDyes: boolean;
artDyeChannels: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyArtDyeReference {
    artDyeChannelHash: number;
  }

export interface DestinyItemTranslationBlockDefinition {
    weaponPatternIdentifier: string;
weaponPatternHash: number;
defaultDyes: array;
lockedDyes: array;
customDyes: array;
arrangements: array;
hasGeometry: boolean;
  }

export interface DyeReference {
    channelHash: number;
dyeHash: number;
  }

export interface DestinyGearArtArrangementReference {
    classHash: number;
artArrangementHash: number;
  }

export interface DestinyClassDefinition {
    classType: number;
displayProperties: undefined;
genderedClassNames: object;
genderedClassNamesByGenderHash: object;
mentorVendorHash: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyGenderDefinition {
    genderType: number;
displayProperties: undefined;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyVendorDefinition {
    displayProperties: undefined;
vendorProgressionType: number;
buyString: string;
sellString: string;
displayItemHash: number;
inhibitBuying: boolean;
inhibitSelling: boolean;
factionHash: number;
resetIntervalMinutes: number;
resetOffsetMinutes: number;
failureStrings: array;
unlockRanges: array;
vendorIdentifier: string;
vendorPortrait: string;
vendorBanner: string;
enabled: boolean;
visible: boolean;
vendorSubcategoryIdentifier: string;
consolidateCategories: boolean;
actions: array;
categories: array;
originalCategories: array;
displayCategories: array;
interactions: array;
inventoryFlyouts: array;
itemList: array;
services: array;
acceptedItems: array;
returnWithVendorRequest: boolean;
locations: array;
groups: array;
ignoreSaleItemHashes: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyVendorDisplayPropertiesDefinition {
    largeIcon: string;
subtitle: string;
originalIcon: string;
requirementsDisplay: array;
smallTransparentIcon: string;
mapIcon: string;
largeTransparentIcon: string;
description: string;
name: string;
icon: string;
iconSequences: array;
highResIcon: string;
hasIcon: boolean;
  }

export interface DestinyVendorRequirementDisplayEntryDefinition {
    icon: string;
name: string;
source: string;
type: string;
  }

export interface DestinyVendorActionDefinition {
    description: string;
executeSeconds: number;
icon: string;
name: string;
verb: string;
isPositive: boolean;
actionId: string;
actionHash: number;
autoPerformAction: boolean;
  }

export interface DestinyVendorCategoryEntryDefinition {
    categoryIndex: number;
sortValue: number;
categoryHash: number;
quantityAvailable: number;
showUnavailableItems: boolean;
hideIfNoCurrency: boolean;
hideFromRegularPurchase: boolean;
buyStringOverride: string;
disabledDescription: string;
displayTitle: string;
overlay: object;
vendorItemIndexes: array;
isPreview: boolean;
isDisplayOnly: boolean;
resetIntervalMinutesOverride: number;
resetOffsetMinutesOverride: number;
  }

export interface DestinyVendorCategoryOverlayDefinition {
    choiceDescription: string;
description: string;
icon: string;
title: string;
currencyItemHash: number;
  }

export interface DestinyDisplayCategoryDefinition {
    index: number;
identifier: string;
displayCategoryHash: number;
displayProperties: undefined;
displayInBanner: boolean;
progressionHash: number;
sortOrder: number;
displayStyleHash: number;
displayStyleIdentifier: string;
  }

export interface DestinyVendorInteractionDefinition {
    interactionIndex: number;
replies: array;
vendorCategoryIndex: number;
questlineItemHash: number;
sackInteractionList: array;
uiInteractionType: number;
interactionType: number;
rewardBlockLabel: string;
rewardVendorCategoryIndex: number;
flavorLineOne: string;
flavorLineTwo: string;
headerDisplayProperties: object;
instructions: string;
  }

export interface DestinyVendorInteractionReplyDefinition {
    itemRewardsSelection: number;
reply: string;
replyType: number;
  }

export interface DestinyVendorInteractionSackEntryDefinition {
    sackType: number;
  }

export interface DestinyVendorInventoryFlyoutDefinition {
    lockedDescription: string;
displayProperties: object;
buckets: array;
flyoutId: number;
suppressNewness: boolean;
equipmentSlotHash: number;
  }

export interface DestinyVendorInventoryFlyoutBucketDefinition {
    collapsible: boolean;
inventoryBucketHash: number;
sortItemsBy: number;
  }

export interface DestinyVendorItemDefinition {
    vendorItemIndex: number;
itemHash: number;
quantity: number;
failureIndexes: array;
currencies: array;
refundPolicy: number;
refundTimeLimit: number;
creationLevels: array;
displayCategoryIndex: number;
categoryIndex: number;
originalCategoryIndex: number;
minimumLevel: number;
maximumLevel: number;
action: object;
displayCategory: string;
inventoryBucketHash: number;
visibilityScope: number;
purchasableScope: number;
exclusivity: number;
isOffer: boolean;
isCrm: boolean;
sortValue: number;
expirationTooltip: string;
redirectToSaleIndexes: array;
socketOverrides: array;
unpurchasable: boolean;
  }

export interface DestinyVendorItemQuantity {
    itemHash: number;
itemInstanceId: number;
quantity: number;
hasConditionalVisibility: boolean;
  }

export interface DestinyItemCreationEntryLevelDefinition {
    level: number;
  }

export interface DestinyVendorSaleItemActionBlockDefinition {
    executeSeconds: number;
isPositive: boolean;
  }

export interface DestinyVendorItemSocketOverride {
    singleItemHash: number;
randomizedOptionsCount: number;
socketTypeHash: number;
  }

export interface DestinyVendorServiceDefinition {
    name: string;
  }

export interface DestinyVendorAcceptedItemDefinition {
    acceptedInventoryBucketHash: number;
destinationInventoryBucketHash: number;
  }

export interface DestinyVendorLocationDefinition {
    destinationHash: number;
backgroundImagePath: string;
  }

export interface DestinyDestinationDefinition {
    displayProperties: undefined;
placeHash: number;
defaultFreeroamActivityHash: number;
activityGraphEntries: array;
bubbleSettings: array;
bubbles: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyActivityGraphListEntryDefinition {
    activityGraphHash: number;
  }

export interface DestinyActivityGraphDefinition {
    nodes: array;
artElements: array;
connections: array;
displayObjectives: array;
displayProgressions: array;
linkedGraphs: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyActivityGraphNodeDefinition {
    nodeId: number;
overrideDisplay: object;
position: object;
featuringStates: array;
activities: array;
states: array;
  }

export interface DestinyPositionDefinition {
    x: number;
y: number;
z: number;
  }

export interface DestinyActivityGraphNodeFeaturingStateDefinition {
    highlightType: number;
  }

export interface DestinyActivityGraphNodeActivityDefinition {
    nodeActivityId: number;
activityHash: number;
  }

export interface DestinyActivityDefinition {
    displayProperties: object;
originalDisplayProperties: object;
selectionScreenDisplayProperties: object;
releaseIcon: string;
releaseTime: number;
activityLightLevel: number;
destinationHash: number;
placeHash: number;
activityTypeHash: number;
tier: number;
pgcrImage: string;
rewards: array;
modifiers: array;
isPlaylist: boolean;
challenges: array;
optionalUnlockStrings: array;
playlistItems: array;
activityGraphList: array;
matchmaking: object;
guidedGame: object;
directActivityModeHash: number;
directActivityModeType: number;
loadouts: array;
activityModeHashes: array;
activityModeTypes: array;
isPvP: boolean;
insertionPoints: array;
activityLocationMappings: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyActivityRewardDefinition {
    rewardText: string;
rewardItems: array;
  }

export interface DestinyActivityModifierReferenceDefinition {
    activityModifierHash: number;
  }

export interface DestinyActivityModifierDefinition {
    displayProperties: undefined;
displayInNavMode: boolean;
displayInActivitySelection: boolean;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyActivityChallengeDefinition {
    objectiveHash: number;
dummyRewards: array;
  }

export interface DestinyObjectiveDefinition {
    displayProperties: object;
completionValue: number;
scope: number;
locationHash: number;
allowNegativeValue: boolean;
allowValueChangeWhenCompleted: boolean;
isCountingDownward: boolean;
valueStyle: number;
progressDescription: string;
perks: object;
stats: object;
minimumVisibilityThreshold: number;
allowOvercompletion: boolean;
showValueOnComplete: boolean;
completedValueStyle: number;
inProgressValueStyle: number;
uiLabel: string;
uiStyle: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyObjectivePerkEntryDefinition {
    perkHash: number;
style: number;
  }

export interface DestinySandboxPerkDefinition {
    displayProperties: object;
perkIdentifier: string;
isDisplayable: boolean;
damageType: number;
damageTypeHash: number;
perkGroups: object;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyTalentNodeStepGroups {
    weaponPerformance: number;
impactEffects: number;
guardianAttributes: number;
lightAbilities: number;
damageTypes: number;
  }

export interface DestinyDamageTypeDefinition {
    displayProperties: object;
transparentIconPath: string;
showIcon: boolean;
enumValue: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyObjectiveStatEntryDefinition {
    stat: object;
style: number;
  }

export interface DestinyItemInvestmentStatDefinition {
    statTypeHash: number;
value: number;
isConditionallyActive: boolean;
  }

export interface DestinyLocationDefinition {
    vendorHash: number;
locationReleases: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyLocationReleaseDefinition {
    displayProperties: object;
smallTransparentIcon: string;
mapIcon: string;
largeTransparentIcon: string;
spawnPoint: number;
destinationHash: number;
activityHash: number;
activityGraphHash: number;
activityGraphNodeHash: number;
activityBubbleName: number;
activityPathBundle: number;
activityPathDestination: number;
navPointType: number;
worldPosition: array;
  }

export interface DestinyActivityUnlockStringDefinition {
    displayString: string;
  }

export interface DestinyActivityPlaylistItemDefinition {
    activityHash: number;
directActivityModeHash: number;
directActivityModeType: number;
activityModeHashes: array;
activityModeTypes: array;
  }

export interface DestinyActivityModeDefinition {
    displayProperties: undefined;
pgcrImage: string;
modeType: number;
activityModeCategory: number;
isTeamBased: boolean;
isAggregateMode: boolean;
parentHashes: array;
friendlyName: string;
activityModeMappings: object;
display: boolean;
order: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyActivityMatchmakingBlockDefinition {
    isMatchmade: boolean;
minParty: number;
maxParty: number;
maxPlayers: number;
requiresGuardianOath: boolean;
  }

export interface DestinyActivityGuidedBlockDefinition {
    guidedMaxLobbySize: number;
guidedMinLobbySize: number;
guidedDisbandCount: number;
  }

export interface DestinyActivityLoadoutRequirementSet {
    requirements: array;
  }

export interface DestinyActivityLoadoutRequirement {
    equipmentSlotHash: number;
allowedEquippedItemHashes: array;
allowedWeaponSubTypes: array;
  }

export interface DestinyActivityInsertionPointDefinition {
    phaseHash: number;
  }

export interface DestinyEnvironmentLocationMapping {
    locationHash: number;
activationSource: string;
itemHash: number;
objectiveHash: number;
activityHash: number;
  }

export interface DestinyPlaceDefinition {
    displayProperties: undefined;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyActivityTypeDefinition {
    displayProperties: undefined;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyActivityGraphNodeStateEntry {
    state: number;
  }

export interface DestinyActivityGraphArtElementDefinition {
    position: object;
  }

export interface DestinyActivityGraphConnectionDefinition {
    sourceNodeHash: number;
destNodeHash: number;
  }

export interface DestinyActivityGraphDisplayObjectiveDefinition {
    id: number;
objectiveHash: number;
  }

export interface DestinyActivityGraphDisplayProgressionDefinition {
    id: number;
progressionHash: number;
  }

export interface DestinyLinkedGraphDefinition {
    description: string;
name: string;
unlockExpression: undefined;
linkedGraphId: number;
linkedGraphs: array;
overview: string;
  }

export interface DestinyUnlockExpressionDefinition {
    scope: number;
  }

export interface DestinyLinkedGraphEntryDefinition {
    activityGraphHash: number;
  }

export interface DestinyDestinationBubbleSettingDefinition {
    displayProperties: undefined;
  }

export interface DestinyBubbleDefinition {
    hash: number;
displayProperties: object;
  }

export interface DestinyVendorGroupReference {
    vendorGroupHash: number;
  }

export interface DestinyVendorGroupDefinition {
    order: number;
categoryName: string;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyFactionDefinition {
    displayProperties: undefined;
progressionHash: number;
tokenValues: object;
rewardItemHash: number;
rewardVendorHash: number;
vendors: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyFactionVendorDefinition {
    vendorHash: number;
destinationHash: number;
backgroundImagePath: string;
  }

export interface DestinySandboxPatternDefinition {
    patternHash: number;
patternGlobalTagIdHash: number;
weaponContentGroupHash: number;
weaponTranslationGroupHash: number;
weaponTypeHash: number;
weaponType: number;
filters: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyArrangementRegionFilterDefinition {
    artArrangementRegionHash: number;
artArrangementRegionIndex: number;
statHash: number;
arrangementIndexByStatValue: object;
  }

export interface DestinyItemPreviewBlockDefinition {
    screenStyle: string;
previewVendorHash: number;
artifactHash: number;
previewActionString: string;
derivedItemCategories: array;
  }

export interface DestinyDerivedItemCategoryDefinition {
    categoryDescription: string;
items: array;
  }

export interface DestinyDerivedItemDefinition {
    itemHash: number;
itemName: string;
itemDetail: string;
itemDescription: string;
iconPath: string;
vendorItemIndex: number;
  }

export interface DestinyArtifactDefinition {
    displayProperties: object;
translationBlock: object;
tiers: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyArtifactTierDefinition {
    tierHash: number;
displayTitle: string;
progressRequirementMessage: string;
items: array;
minimumUnlockPointsUsedRequirement: number;
  }

export interface DestinyArtifactTierItemDefinition {
    itemHash: number;
  }

export interface DestinyItemQualityBlockDefinition {
    itemLevels: array;
qualityLevel: number;
infusionCategoryName: string;
infusionCategoryHash: number;
infusionCategoryHashes: array;
progressionLevelRequirementHash: number;
currentVersion: number;
versions: array;
displayVersionWatermarkIcons: array;
  }

export interface DestinyItemVersionDefinition {
    powerCapHash: number;
  }

export interface DestinyPowerCapDefinition {
    powerCap: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyProgressionLevelRequirementDefinition {
    requirementCurve: array;
progressionHash: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyItemValueBlockDefinition {
    itemValue: array;
valueDescription: string;
  }

export interface DestinyItemSourceBlockDefinition {
    sourceHashes: array;
sources: array;
exclusive: number;
vendorSources: array;
  }

export interface DestinyItemSourceDefinition {
    level: number;
minQuality: number;
maxQuality: number;
minLevelRequired: number;
maxLevelRequired: number;
computedStats: object;
sourceHashes: array;
  }

export interface DestinyRewardSourceDefinition {
    displayProperties: undefined;
category: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyItemVendorSourceReference {
    vendorHash: number;
vendorItemIndexes: array;
  }

export interface DestinyItemObjectiveBlockDefinition {
    objectiveHashes: array;
displayActivityHashes: array;
requireFullObjectiveCompletion: boolean;
questlineItemHash: number;
narrative: string;
objectiveVerbName: string;
questTypeIdentifier: string;
questTypeHash: number;
perObjectiveDisplayProperties: array;
displayAsStatTracker: boolean;
  }

export interface DestinyObjectiveDisplayProperties {
    activityHash: number;
displayOnItemPreviewScreen: boolean;
  }

export interface DestinyItemMetricBlockDefinition {
    availableMetricCategoryNodeHashes: array;
  }

export interface DestinyPresentationNodeBaseDefinition {
    presentationNodeType: number;
traitIds: array;
traitHashes: array;
parentNodeHashes: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyTraitDefinition {
    displayProperties: undefined;
traitCategoryId: string;
traitCategoryHash: number;
displayHint: string;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyTraitCategoryDefinition {
    traitCategoryId: string;
traitHashes: array;
traitIds: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyScoredPresentationNodeBaseDefinition {
    maxCategoryRecordScore: number;
presentationNodeType: number;
traitIds: array;
traitHashes: array;
parentNodeHashes: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyPresentationNodeDefinition {
    displayProperties: undefined;
originalIcon: string;
rootViewIcon: string;
nodeType: number;
scope: number;
objectiveHash: number;
completionRecordHash: number;
children: object;
displayStyle: number;
screenStyle: number;
requirements: object;
disableChildSubscreenNavigation: boolean;
maxCategoryRecordScore: number;
presentationNodeType: number;
traitIds: array;
traitHashes: array;
parentNodeHashes: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyPresentationNodeChildrenBlock {
    presentationNodes: array;
collectibles: array;
records: array;
metrics: array;
craftables: array;
  }

export interface DestinyPresentationNodeChildEntryBase {
    nodeDisplayPriority: number;
  }

export interface DestinyPresentationNodeChildEntry {
    presentationNodeHash: number;
nodeDisplayPriority: number;
  }

export interface DestinyPresentationNodeCollectibleChildEntry {
    collectibleHash: number;
nodeDisplayPriority: number;
  }

export interface DestinyCollectibleDefinition {
    displayProperties: undefined;
scope: number;
sourceString: string;
sourceHash: number;
itemHash: number;
acquisitionInfo: undefined;
stateInfo: undefined;
presentationInfo: undefined;
presentationNodeType: number;
traitIds: array;
traitHashes: array;
parentNodeHashes: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyCollectibleAcquisitionBlock {
    acquireMaterialRequirementHash: number;
acquireTimestampUnlockValueHash: number;
  }

export interface DestinyUnlockValueDefinition {
    hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyCollectibleStateBlock {
    obscuredOverrideItemHash: number;
requirements: undefined;
  }

export interface DestinyPresentationNodeRequirementsBlock {
    entitlementUnavailableMessage: string;
  }

export interface DestinyPresentationChildBlock {
    presentationNodeType: number;
parentPresentationNodeHashes: array;
displayStyle: number;
  }

export interface DestinyPresentationNodeRecordChildEntry {
    recordHash: number;
nodeDisplayPriority: number;
  }

export interface DestinyRecordDefinition {
    displayProperties: undefined;
scope: number;
presentationInfo: undefined;
loreHash: number;
objectiveHashes: array;
recordValueStyle: number;
forTitleGilding: boolean;
shouldShowLargeIcons: boolean;
titleInfo: undefined;
completionInfo: undefined;
stateInfo: undefined;
requirements: undefined;
expirationInfo: undefined;
intervalInfo: object;
rewardItems: array;
presentationNodeType: number;
traitIds: array;
traitHashes: array;
parentNodeHashes: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyRecordTitleBlock {
    hasTitle: boolean;
titlesByGender: object;
titlesByGenderHash: object;
gildingTrackingRecordHash: number;
  }

export interface DestinyRecordCompletionBlock {
    partialCompletionObjectiveCountThreshold: number;
ScoreValue: number;
shouldFireToast: boolean;
toastStyle: number;
  }

export interface SchemaRecordStateBlock {
    featuredPriority: number;
obscuredString: string;
  }

export interface DestinyRecordExpirationBlock {
    hasExpiration: boolean;
description: string;
icon: string;
  }

export interface DestinyRecordIntervalBlock {
    intervalObjectives: array;
intervalRewards: array;
originalObjectiveArrayInsertionIndex: number;
  }

export interface DestinyRecordIntervalObjective {
    intervalObjectiveHash: number;
intervalScoreValue: number;
  }

export interface DestinyRecordIntervalRewards {
    intervalRewardItems: array;
  }

export interface DestinyLoreDefinition {
    displayProperties: undefined;
subtitle: string;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyPresentationNodeMetricChildEntry {
    metricHash: number;
nodeDisplayPriority: number;
  }

export interface DestinyMetricDefinition {
    displayProperties: undefined;
trackingObjectiveHash: number;
lowerValueIsBetter: boolean;
presentationNodeType: number;
traitIds: array;
traitHashes: array;
parentNodeHashes: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyPresentationNodeCraftableChildEntry {
    craftableItemHash: number;
nodeDisplayPriority: number;
  }

export interface DestinyItemPlugDefinition {
    insertionRules: array;
plugCategoryIdentifier: string;
plugCategoryHash: number;
onActionRecreateSelf: boolean;
insertionMaterialRequirementHash: number;
previewItemOverrideHash: number;
enabledMaterialRequirementHash: number;
enabledRules: array;
uiPlugLabel: string;
plugStyle: number;
plugAvailability: number;
alternateUiPlugLabel: string;
alternatePlugStyle: number;
isDummyPlug: boolean;
parentItemOverride: object;
energyCapacity: object;
energyCost: object;
  }

export interface DestinyPlugRuleDefinition {
    failureMessage: string;
  }

export interface DestinyParentItemOverride {
    additionalEquipRequirementsDisplayStrings: array;
pipIcon: string;
  }

export interface DestinyEnergyCapacityEntry {
    capacityValue: number;
energyTypeHash: number;
energyType: number;
  }

export interface DestinyEnergyTypeDefinition {
    displayProperties: object;
transparentIconPath: string;
showIcon: boolean;
enumValue: number;
capacityStatHash: number;
costStatHash: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyEnergyCostEntry {
    energyCost: number;
energyTypeHash: number;
energyType: number;
  }

export interface DestinyItemGearsetBlockDefinition {
    trackingValueMax: number;
itemList: array;
  }

export interface DestinyItemSackBlockDefinition {
    detailAction: string;
openAction: string;
selectItemCount: number;
vendorSackType: string;
openOnAcquire: boolean;
  }

export interface DestinyItemSocketBlockDefinition {
    detail: string;
socketEntries: array;
intrinsicSockets: array;
socketCategories: array;
  }

export interface DestinyItemSocketEntryDefinition {
    socketTypeHash: number;
singleInitialItemHash: number;
reusablePlugItems: array;
preventInitializationOnVendorPurchase: boolean;
hidePerksInItemTooltip: boolean;
plugSources: number;
reusablePlugSetHash: number;
randomizedPlugSetHash: number;
defaultVisible: boolean;
  }

export interface DestinyItemSocketEntryPlugItemDefinition {
    plugItemHash: number;
  }

export interface DestinyPlugSetDefinition {
    displayProperties: object;
reusablePlugItems: array;
isFakePlugSet: boolean;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyItemSocketEntryPlugItemRandomizedDefinition {
    craftingRequirements: undefined;
currentlyCanRoll: boolean;
plugItemHash: number;
  }

export interface DestinyPlugItemCraftingRequirements {
    unlockRequirements: array;
requiredLevel: number;
materialRequirementHashes: array;
  }

export interface DestinyPlugItemCraftingUnlockRequirement {
    failureDescription: string;
  }

export interface DestinyItemIntrinsicSocketEntryDefinition {
    plugItemHash: number;
socketTypeHash: number;
defaultVisible: boolean;
  }

export interface DestinyItemSocketCategoryDefinition {
    socketCategoryHash: number;
socketIndexes: array;
  }

export interface DestinyItemSummaryBlockDefinition {
    sortPriority: number;
  }

export interface DestinyItemTalentGridBlockDefinition {
    talentGridHash: number;
itemDetailString: string;
buildName: string;
hudDamageType: number;
hudIcon: string;
  }

export interface DestinyTalentGridDefinition {
    maxGridLevel: number;
gridLevelPerColumn: number;
progressionHash: number;
nodes: array;
exclusiveSets: array;
independentNodeIndexes: array;
groups: object;
nodeCategories: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyTalentNodeDefinition {
    nodeIndex: number;
nodeHash: number;
row: number;
column: number;
prerequisiteNodeIndexes: array;
binaryPairNodeIndex: number;
autoUnlocks: boolean;
lastStepRepeats: boolean;
isRandom: boolean;
randomActivationRequirement: object;
isRandomRepurchasable: boolean;
steps: array;
exclusiveWithNodeHashes: array;
randomStartProgressionBarAtProgression: number;
layoutIdentifier: string;
groupHash: number;
loreHash: number;
nodeStyleIdentifier: string;
ignoreForCompletion: boolean;
  }

export interface DestinyNodeActivationRequirement {
    gridLevel: number;
materialRequirementHashes: array;
  }

export interface DestinyNodeStepDefinition {
    displayProperties: object;
stepIndex: number;
nodeStepHash: number;
interactionDescription: string;
damageType: number;
damageTypeHash: number;
activationRequirement: object;
canActivateNextStep: boolean;
nextStepIndex: number;
isNextStepRandom: boolean;
perkHashes: array;
startProgressionBarAtProgress: number;
statHashes: array;
affectsQuality: boolean;
stepGroups: object;
affectsLevel: boolean;
socketReplacements: array;
  }

export interface DestinyNodeSocketReplaceResponse {
    socketTypeHash: number;
plugItemHash: number;
  }

export interface DestinyTalentNodeExclusiveSetDefinition {
    nodeIndexes: array;
  }

export interface DestinyTalentExclusiveGroup {
    groupHash: number;
loreHash: number;
nodeHashes: array;
opposingGroupHashes: array;
opposingNodeHashes: array;
  }

export interface DestinyTalentNodeCategory {
    identifier: string;
isLoreDriven: boolean;
displayProperties: object;
nodeHashes: array;
  }

export interface DestinyItemPerkEntryDefinition {
    requirementDisplayString: string;
perkHash: number;
perkVisibility: number;
  }

export interface DestinyAnimationReference {
    animName: string;
animIdentifier: string;
path: string;
  }

export interface DestinyItemCategoryDefinition {
    displayProperties: undefined;
visible: boolean;
deprecated: boolean;
shortTitle: string;
itemTypeRegex: string;
grantDestinyBreakerType: number;
plugCategoryIdentifier: string;
itemTypeRegexNot: string;
originBucketIdentifier: string;
grantDestinyItemType: number;
grantDestinySubType: number;
grantDestinyClass: number;
traitId: string;
groupedCategoryHashes: array;
parentCategoryHashes: array;
groupCategoryOnly: boolean;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyBreakerTypeDefinition {
    displayProperties: undefined;
enumValue: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinySeasonDefinition {
    displayProperties: undefined;
backgroundImagePath: string;
seasonNumber: number;
startDate: string;
endDate: string;
seasonPassHash: number;
seasonPassProgressionHash: number;
artifactItemHash: number;
sealPresentationNodeHash: number;
seasonalChallengesPresentationNodeHash: number;
preview: object;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinySeasonPreviewDefinition {
    description: string;
linkPath: string;
videoLink: string;
images: array;
  }

export interface DestinySeasonPreviewImageDefinition {
    thumbnailImage: string;
highResImage: string;
  }

export interface DestinySeasonPassDefinition {
    displayProperties: undefined;
rewardProgressionHash: number;
prestigeProgressionHash: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyProgressionRewardItemQuantity {
    rewardedAtProgressionLevel: number;
acquisitionBehavior: number;
uiDisplayStyle: string;
claimUnlockDisplayStrings: array;
itemHash: number;
itemInstanceId: number;
quantity: number;
hasConditionalVisibility: boolean;
  }

export interface DestinyManifest {
    version: string;
mobileAssetContentPath: string;
mobileGearAssetDataBases: array;
mobileWorldContentPaths: object;
jsonWorldContentPaths: object;
jsonWorldComponentContentPaths: object;
mobileClanBannerDatabasePath: string;
mobileGearCDN: object;
iconImagePyramidInfo: array;
  }

export interface GearAssetDataBaseDefinition {
    version: number;
path: string;
  }

export interface ImagePyramidEntry {
    name: string;
factor: number;
  }

export interface DestinyLinkedProfilesResponse {
    profiles: array;
bnetMembership: object;
profilesWithErrors: array;
  }

export interface DestinyProfileUserInfoCard {
    dateLastPlayed: string;
isOverridden: boolean;
isCrossSavePrimary: boolean;
platformSilver: object;
unpairedGameVersions: number;
supplementalDisplayName: string;
iconPath: string;
crossSaveOverride: number;
applicableMembershipTypes: array;
isPublic: boolean;
membershipType: number;
membershipId: number;
displayName: string;
bungieGlobalDisplayName: string;
bungieGlobalDisplayNameCode: number;
  }

export interface DestinyPlatformSilverComponent {
    platformSilver: object;
  }

export interface DestinyItemComponent {
    itemHash: number;
itemInstanceId: number;
quantity: number;
bindStatus: number;
location: number;
bucketHash: number;
transferStatus: number;
lockable: boolean;
state: number;
overrideStyleItemHash: number;
expirationDate: string;
isWrapper: boolean;
tooltipNotificationIndexes: array;
metricHash: number;
metricObjective: object;
versionNumber: number;
itemValueVisibility: array;
  }

export interface DestinyObjectiveProgress {
    objectiveHash: number;
destinationHash: number;
activityHash: number;
progress: number;
completionValue: number;
complete: boolean;
visible: boolean;
  }

export interface DestinyErrorProfile {
    errorCode: number;
infoCard: object;
  }

export interface DestinyProfileResponse {
    vendorReceipts: object;
profileInventory: object;
profileCurrencies: object;
profile: object;
platformSilver: object;
profileKiosks: object;
profilePlugSets: object;
profileProgression: object;
profilePresentationNodes: object;
profileRecords: object;
profileCollectibles: object;
profileTransitoryData: object;
metrics: object;
profileStringVariables: object;
characters: object;
characterInventories: object;
characterProgressions: object;
characterRenderData: object;
characterActivities: object;
characterEquipment: object;
characterKiosks: object;
characterPlugSets: object;
characterUninstancedItemComponents: object;
characterPresentationNodes: object;
characterRecords: object;
characterCollectibles: object;
characterStringVariables: object;
characterCraftables: object;
itemComponents: object;
characterCurrencyLookups: object;
  }

export interface DestinyVendorReceiptsComponent {
    receipts: array;
  }

export interface DestinyVendorReceipt {
    currencyPaid: array;
itemReceived: object;
licenseUnlockHash: number;
purchasedByCharacterId: number;
refundPolicy: number;
sequenceNumber: number;
timeToExpiration: number;
expiresOn: string;
  }

export interface DestinyInventoryComponent {
    items: array;
  }

export interface DestinyProfileComponent {
    userInfo: object;
dateLastPlayed: string;
versionsOwned: number;
characterIds: array;
seasonHashes: array;
eventCardHashesOwned: array;
currentSeasonHash: number;
currentSeasonRewardPowerCap: number;
activeEventCardHash: number;
  }

export interface DestinyEventCardDefinition {
    displayProperties: undefined;
linkRedirectPath: string;
color: undefined;
images: undefined;
triumphsPresentationNodeHash: number;
sealPresentationNodeHash: number;
ticketCurrencyItemHash: number;
ticketVendorHash: number;
ticketVendorCategoryHash: number;
endTime: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyEventCardImages {
    unownedCardSleeveImagePath: string;
unownedCardSleeveWrapImagePath: string;
cardIncompleteImagePath: string;
cardCompleteImagePath: string;
cardCompleteWrapImagePath: string;
progressIconImagePath: string;
themeBackgroundImagePath: string;
  }

export interface DestinyKiosksComponent {
    kioskItems: object;
  }

export interface DestinyKioskItem {
    index: number;
canAcquire: boolean;
failureIndexes: array;
flavorObjective: object;
  }

export interface DestinyPlugSetsComponent {
    plugs: object;
  }

export interface DestinyItemPlugBase {
    plugItemHash: number;
canInsert: boolean;
enabled: boolean;
insertFailIndexes: array;
enableFailIndexes: array;
  }

export interface DestinyItemPlug {
    plugObjectives: array;
plugItemHash: number;
canInsert: boolean;
enabled: boolean;
insertFailIndexes: array;
enableFailIndexes: array;
  }

export interface DestinyProfileProgressionComponent {
    checklists: object;
seasonalArtifact: object;
  }

export interface DestinyArtifactProfileScoped {
    artifactHash: number;
pointProgression: undefined;
pointsAcquired: number;
powerBonusProgression: undefined;
powerBonus: number;
  }

export interface DestinyChecklistDefinition {
    displayProperties: undefined;
viewActionString: string;
scope: number;
entries: array;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyChecklistEntryDefinition {
    hash: number;
displayProperties: object;
destinationHash: number;
locationHash: number;
bubbleHash: number;
activityHash: number;
itemHash: number;
vendorHash: number;
vendorInteractionIndex: number;
scope: number;
  }

export interface DestinyPresentationNodesComponent {
    nodes: object;
  }

export interface DestinyPresentationNodeComponent {
    state: number;
objective: object;
progressValue: number;
completionValue: number;
recordCategoryScore: number;
  }

export interface DestinyRecordsComponent {
    records: object;
recordCategoriesRootNodeHash: number;
recordSealsRootNodeHash: number;
  }

export interface DestinyRecordComponent {
    state: number;
objectives: array;
intervalObjectives: array;
intervalsRedeemedCount: number;
completedCount: number;
rewardVisibilty: array;
  }

export interface DestinyProfileRecordsComponent {
    score: number;
activeScore: number;
legacyScore: number;
lifetimeScore: number;
trackedRecordHash: number;
records: object;
recordCategoriesRootNodeHash: number;
recordSealsRootNodeHash: number;
  }

export interface DestinyCollectiblesComponent {
    collectibles: object;
collectionCategoriesRootNodeHash: number;
collectionBadgesRootNodeHash: number;
  }

export interface DestinyCollectibleComponent {
    state: number;
  }

export interface DestinyProfileCollectiblesComponent {
    recentCollectibleHashes: array;
newnessFlaggedCollectibleHashes: array;
collectibles: object;
collectionCategoriesRootNodeHash: number;
collectionBadgesRootNodeHash: number;
  }

export interface DestinyProfileTransitoryComponent {
    partyMembers: array;
currentActivity: object;
joinability: object;
tracking: array;
lastOrbitedDestinationHash: number;
  }

export interface DestinyProfileTransitoryPartyMember {
    membershipId: number;
emblemHash: number;
displayName: string;
status: number;
  }

export interface DestinyProfileTransitoryCurrentActivity {
    startTime: string;
endTime: string;
score: number;
highestOpposingFactionScore: number;
numberOfOpponents: number;
numberOfPlayers: number;
  }

export interface DestinyProfileTransitoryJoinability {
    openSlots: number;
privacySetting: number;
closedReasons: number;
  }

export interface DestinyProfileTransitoryTrackingEntry {
    locationHash: number;
itemHash: number;
objectiveHash: number;
activityHash: number;
questlineItemHash: number;
trackedDate: string;
  }

export interface DestinyMetricsComponent {
    metrics: object;
metricsRootNodeHash: number;
  }

export interface DestinyMetricComponent {
    invisible: boolean;
objectiveProgress: undefined;
  }

export interface DestinyStringVariablesComponent {
    integerValuesByHash: object;
  }

export interface DestinyCharacterComponent {
    membershipId: number;
membershipType: number;
characterId: number;
dateLastPlayed: string;
minutesPlayedThisSession: number;
minutesPlayedTotal: number;
light: number;
stats: object;
raceHash: number;
genderHash: number;
classHash: number;
raceType: number;
classType: number;
genderType: number;
emblemPath: string;
emblemBackgroundPath: string;
emblemHash: number;
emblemColor: object;
levelProgression: object;
baseCharacterLevel: number;
percentToNextLevel: number;
titleRecordHash: number;
  }

export interface DestinyRaceDefinition {
    displayProperties: undefined;
raceType: number;
genderedRaceNames: object;
genderedRaceNamesByGenderHash: object;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyCharacterProgressionComponent {
    progressions: object;
factions: object;
milestones: object;
quests: array;
uninstancedItemObjectives: object;
uninstancedItemPerks: object;
checklists: object;
seasonalArtifact: object;
  }

export interface DestinyFactionProgression {
    factionHash: number;
factionVendorIndex: number;
progressionHash: number;
dailyProgress: number;
dailyLimit: number;
weeklyProgress: number;
weeklyLimit: number;
currentProgress: number;
level: number;
levelCap: number;
stepIndex: number;
progressToNextLevel: number;
nextLevelAt: number;
currentResetCount: number;
seasonResets: array;
rewardItemStates: array;
  }

export interface DestinyMilestone {
    milestoneHash: number;
availableQuests: array;
activities: array;
values: object;
vendorHashes: array;
vendors: array;
rewards: array;
startDate: string;
endDate: string;
order: number;
  }

export interface DestinyMilestoneQuest {
    questItemHash: number;
status: object;
activity: object;
challenges: array;
  }

export interface DestinyQuestStatus {
    questHash: number;
stepHash: number;
stepObjectives: array;
tracked: boolean;
itemInstanceId: number;
completed: boolean;
redeemed: boolean;
started: boolean;
vendorHash: number;
  }

export interface DestinyMilestoneActivity {
    activityHash: number;
activityModeHash: number;
activityModeType: number;
modifierHashes: array;
variants: array;
  }

export interface DestinyMilestoneActivityVariant {
    activityHash: number;
completionStatus: object;
activityModeHash: number;
activityModeType: number;
  }

export interface DestinyMilestoneActivityCompletionStatus {
    completed: boolean;
phases: array;
  }

export interface DestinyMilestoneActivityPhase {
    complete: boolean;
phaseHash: number;
  }

export interface DestinyChallengeStatus {
    objective: object;
  }

export interface DestinyMilestoneChallengeActivity {
    activityHash: number;
challenges: array;
modifierHashes: array;
booleanActivityOptions: object;
loadoutRequirementIndex: number;
phases: array;
  }

export interface DestinyMilestoneVendor {
    vendorHash: number;
previewItemHash: number;
  }

export interface DestinyMilestoneRewardCategory {
    rewardCategoryHash: number;
entries: array;
  }

export interface DestinyMilestoneRewardEntry {
    rewardEntryHash: number;
earned: boolean;
redeemed: boolean;
  }

export interface DestinyMilestoneDefinition {
    displayProperties: undefined;
displayPreference: number;
image: string;
milestoneType: number;
recruitable: boolean;
friendlyName: string;
showInExplorer: boolean;
showInMilestones: boolean;
explorePrioritizesActivityImage: boolean;
hasPredictableDates: boolean;
quests: object;
rewards: object;
vendorsDisplayTitle: string;
vendors: array;
values: object;
isInGameMilestone: boolean;
activities: array;
defaultOrder: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyMilestoneQuestDefinition {
    questItemHash: number;
displayProperties: object;
overrideImage: string;
questRewards: object;
activities: object;
destinationHash: number;
  }

export interface DestinyMilestoneQuestRewardsDefinition {
    items: array;
  }

export interface DestinyMilestoneQuestRewardItem {
    vendorHash: number;
vendorItemIndex: number;
itemHash: number;
itemInstanceId: number;
quantity: number;
hasConditionalVisibility: boolean;
  }

export interface DestinyMilestoneActivityDefinition {
    conceptualActivityHash: number;
variants: object;
  }

export interface DestinyMilestoneActivityVariantDefinition {
    activityHash: number;
order: number;
  }

export interface DestinyMilestoneRewardCategoryDefinition {
    categoryHash: number;
categoryIdentifier: string;
displayProperties: object;
rewardEntries: object;
order: number;
  }

export interface DestinyMilestoneRewardEntryDefinition {
    rewardEntryHash: number;
rewardEntryIdentifier: string;
items: array;
vendorHash: number;
displayProperties: object;
order: number;
  }

export interface DestinyMilestoneVendorDefinition {
    vendorHash: number;
  }

export interface DestinyMilestoneValueDefinition {
    key: string;
displayProperties: undefined;
  }

export interface DestinyMilestoneChallengeActivityDefinition {
    activityHash: number;
challenges: array;
activityGraphNodes: array;
phases: array;
  }

export interface DestinyMilestoneChallengeDefinition {
    challengeObjectiveHash: number;
  }

export interface DestinyMilestoneChallengeActivityGraphNodeEntry {
    activityGraphHash: number;
activityGraphNodeHash: number;
  }

export interface DestinyMilestoneChallengeActivityPhase {
    phaseHash: number;
  }

export interface DestinyItemPerksComponent {
    perks: array;
  }

export interface DestinyPerkReference {
    perkHash: number;
iconPath: string;
isActive: boolean;
visible: boolean;
  }

export interface DestinyArtifactCharacterScoped {
    artifactHash: number;
pointsUsed: number;
resetCount: number;
tiers: array;
  }

export interface DestinyArtifactTier {
    tierHash: number;
isUnlocked: boolean;
pointsToUnlock: number;
items: array;
  }

export interface DestinyArtifactTierItem {
    itemHash: number;
isActive: boolean;
  }

export interface DestinyCharacterRenderComponent {
    customDyes: array;
customization: object;
peerView: object;
  }

export interface DestinyCharacterCustomization {
    personality: number;
face: number;
skinColor: number;
lipColor: number;
eyeColor: number;
hairColors: array;
featureColors: array;
decalColor: number;
wearHelmet: boolean;
hairIndex: number;
featureIndex: number;
decalIndex: number;
  }

export interface DestinyCharacterPeerView {
    equipment: array;
  }

export interface DestinyItemPeerView {
    itemHash: number;
dyes: array;
  }

export interface DestinyCharacterActivitiesComponent {
    dateActivityStarted: string;
availableActivities: array;
currentActivityHash: number;
currentActivityModeHash: number;
currentActivityModeType: number;
currentActivityModeHashes: array;
currentActivityModeTypes: array;
currentPlaylistActivityHash: number;
lastCompletedStoryHash: number;
  }

export interface DestinyActivity {
    activityHash: number;
isNew: boolean;
canLead: boolean;
canJoin: boolean;
isCompleted: boolean;
isVisible: boolean;
displayLevel: number;
recommendedLight: number;
difficultyTier: number;
challenges: array;
modifierHashes: array;
booleanActivityOptions: object;
loadoutRequirementIndex: number;
  }

export interface DestinyItemObjectivesComponent {
    objectives: array;
flavorObjective: object;
dateCompleted: string;
  }

export interface DestinyCharacterRecordsComponent {
    featuredRecordHashes: array;
records: object;
recordCategoriesRootNodeHash: number;
recordSealsRootNodeHash: number;
  }

export interface DestinyCraftablesComponent {
    craftables: object;
craftingRootNodeHash: number;
  }

export interface DestinyCraftableComponent {
    visible: boolean;
failedRequirementIndexes: array;
sockets: array;
  }

export interface DestinyCraftableSocketComponent {
    plugSetHash: number;
plugs: array;
  }

export interface DestinyCraftableSocketPlugComponent {
    plugItemHash: number;
failedRequirementIndexes: array;
  }

export interface DestinyItemInstanceComponent {
    damageType: number;
damageTypeHash: number;
primaryStat: object;
itemLevel: number;
quality: number;
isEquipped: boolean;
canEquip: boolean;
equipRequiredLevel: number;
unlockHashesRequiredToEquip: array;
cannotEquipReason: number;
breakerType: number;
breakerTypeHash: number;
energy: object;
  }

export interface DestinyStat {
    statHash: number;
value: number;
  }

export interface DestinyItemInstanceEnergy {
    energyTypeHash: number;
energyType: number;
energyCapacity: number;
energyUsed: number;
energyUnused: number;
  }

export interface DestinyUnlockDefinition {
    displayProperties: object;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyItemRenderComponent {
    useCustomDyes: boolean;
artRegions: object;
  }

export interface DestinyItemStatsComponent {
    stats: object;
  }

export interface DestinyItemSocketsComponent {
    sockets: array;
  }

export interface DestinyItemSocketState {
    plugHash: number;
isEnabled: boolean;
isVisible: boolean;
enableFailIndexes: array;
  }

export interface DestinyItemReusablePlugsComponent {
    plugs: object;
  }

export interface DestinyItemPlugObjectivesComponent {
    objectivesPerPlug: object;
  }

export interface DestinyItemTalentGridComponent {
    talentGridHash: number;
nodes: array;
isGridComplete: boolean;
gridProgression: object;
  }

export interface DestinyTalentNode {
    nodeIndex: number;
nodeHash: number;
state: number;
isActivated: boolean;
stepIndex: number;
materialsToUpgrade: array;
activationGridLevel: number;
progressPercent: number;
hidden: boolean;
nodeStatsBlock: object;
  }

export interface DestinyTalentNodeStatBlock {
    currentStepStats: array;
nextStepStats: array;
  }

export interface DestinyItemPlugComponent {
    plugObjectives: array;
plugItemHash: number;
canInsert: boolean;
enabled: boolean;
insertFailIndexes: array;
enableFailIndexes: array;
  }

export interface DestinyCurrenciesComponent {
    itemQuantities: object;
  }

export interface DestinyCharacterResponse {
    inventory: object;
character: object;
progressions: object;
renderData: object;
activities: object;
equipment: object;
kiosks: object;
plugSets: object;
presentationNodes: object;
records: object;
collectibles: object;
itemComponents: object;
uninstancedItemComponents: object;
currencyLookups: object;
  }

export interface DestinyItemResponse {
    characterId: number;
item: object;
instance: object;
objectives: object;
perks: object;
renderData: object;
stats: object;
talentGrid: object;
sockets: object;
reusablePlugs: object;
plugObjectives: object;
  }

export interface DestinyVendorsResponse {
    vendorGroups: object;
vendors: object;
categories: object;
sales: object;
itemComponents: object;
currencyLookups: object;
stringVariables: object;
  }

export interface DestinyVendorGroupComponent {
    groups: array;
  }

export interface DestinyVendorGroup {
    vendorGroupHash: number;
vendorHashes: array;
  }

export interface DestinyVendorBaseComponent {
    vendorHash: number;
nextRefreshDate: string;
enabled: boolean;
  }

export interface DestinyVendorComponent {
    canPurchase: boolean;
progression: object;
vendorLocationIndex: number;
seasonalRank: number;
vendorHash: number;
nextRefreshDate: string;
enabled: boolean;
  }

export interface DestinyVendorCategoriesComponent {
    categories: array;
  }

export interface DestinyVendorCategory {
    displayCategoryIndex: number;
itemIndexes: array;
  }

export interface DestinyVendorSaleItemBaseComponent {
    vendorItemIndex: number;
itemHash: number;
overrideStyleItemHash: number;
quantity: number;
costs: array;
overrideNextRefreshDate: string;
apiPurchasable: boolean;
  }

export interface DestinyVendorSaleItemComponent {
    saleStatus: number;
requiredUnlocks: array;
unlockStatuses: array;
failureIndexes: array;
augments: number;
itemValueVisibility: array;
vendorItemIndex: number;
itemHash: number;
overrideStyleItemHash: number;
quantity: number;
costs: array;
overrideNextRefreshDate: string;
apiPurchasable: boolean;
  }

export interface DestinyUnlockStatus {
    unlockHash: number;
isSet: boolean;
  }

export interface PersonalDestinyVendorSaleItemSetComponent {
    saleItems: object;
  }

export interface DestinyVendorResponse {
    vendor: object;
categories: object;
sales: object;
itemComponents: object;
currencyLookups: object;
stringVariables: object;
  }

export interface DestinyPublicVendorsResponse {
    vendorGroups: object;
vendors: object;
categories: object;
sales: object;
stringVariables: object;
  }

export interface DestinyPublicVendorComponent {
    vendorHash: number;
nextRefreshDate: string;
enabled: boolean;
  }

export interface DestinyPublicVendorSaleItemComponent {
    vendorItemIndex: number;
itemHash: number;
overrideStyleItemHash: number;
quantity: number;
costs: array;
overrideNextRefreshDate: string;
apiPurchasable: boolean;
  }

export interface PublicDestinyVendorSaleItemSetComponent {
    saleItems: object;
  }

export interface DestinyCollectibleNodeDetailResponse {
    collectibles: object;
collectibleItemComponents: object;
  }

export interface DestinyActionRequest {
    membershipType: number;
  }

export interface DestinyCharacterActionRequest {
    characterId: number;
membershipType: number;
  }

export interface DestinyItemActionRequest {
    itemId: number;
characterId: number;
membershipType: number;
  }

export interface DestinyItemTransferRequest {
    itemReferenceHash: number;
stackSize: number;
transferToVault: boolean;
itemId: number;
characterId: number;
membershipType: number;
  }

export interface DestinyPostmasterTransferRequest {
    itemReferenceHash: number;
stackSize: number;
itemId: number;
characterId: number;
membershipType: number;
  }

export interface DestinyEquipItemResults {
    equipResults: array;
  }

export interface DestinyEquipItemResult {
    itemInstanceId: number;
equipStatus: number;
  }

export interface DestinyItemSetActionRequest {
    itemIds: array;
characterId: number;
membershipType: number;
  }

export interface DestinyItemStateRequest {
    state: boolean;
itemId: number;
characterId: number;
membershipType: number;
  }

export interface InventoryChangedResponse {
    addedInventoryItems: array;
removedInventoryItems: array;
  }

export interface DestinyItemChangeResponse {
    item: undefined;
addedInventoryItems: array;
removedInventoryItems: array;
  }

export interface DestinyInsertPlugsActionRequest {
    actionToken: string;
itemInstanceId: number;
plug: object;
characterId: number;
membershipType: number;
  }

export interface DestinyInsertPlugsRequestEntry {
    socketIndex: number;
socketArrayType: number;
plugItemHash: number;
  }

export interface DestinyInsertPlugsFreeActionRequest {
    plug: object;
itemId: number;
characterId: number;
membershipType: number;
  }

export interface DestinyPostGameCarnageReportData {
    period: string;
startingPhaseIndex: number;
activityWasStartedFromBeginning: boolean;
activityDetails: object;
entries: array;
teams: array;
  }

export interface DestinyHistoricalStatsActivity {
    referenceId: number;
directorActivityHash: number;
instanceId: number;
mode: number;
modes: array;
isPrivate: boolean;
membershipType: number;
  }

export interface DestinyPostGameCarnageReportEntry {
    standing: number;
score: object;
player: object;
characterId: number;
values: object;
extended: object;
  }

export interface DestinyHistoricalStatsValue {
    statId: string;
basic: object;
pga: object;
weighted: object;
activityId: number;
  }

export interface DestinyHistoricalStatsValuePair {
    value: number;
displayValue: string;
  }

export interface DestinyPlayer {
    destinyUserInfo: object;
characterClass: string;
classHash: number;
raceHash: number;
genderHash: number;
characterLevel: number;
lightLevel: number;
bungieNetUserInfo: object;
clanName: string;
clanTag: string;
emblemHash: number;
  }

export interface DestinyPostGameCarnageReportExtendedData {
    weapons: array;
values: object;
  }

export interface DestinyHistoricalWeaponStats {
    referenceId: number;
values: object;
  }

export interface DestinyPostGameCarnageReportTeamEntry {
    teamId: number;
standing: object;
score: object;
teamName: string;
  }

export interface DestinyReportOffensePgcrRequest {
    reasonCategoryHashes: array;
reasonHashes: array;
offendingCharacterId: number;
  }

export interface DestinyReportReasonCategoryDefinition {
    displayProperties: undefined;
reasons: object;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyReportReasonDefinition {
    reasonHash: number;
displayProperties: undefined;
  }

export interface DestinyHistoricalStatsDefinition {
    statId: string;
group: number;
periodTypes: array;
modes: array;
category: number;
statName: string;
statNameAbbr: string;
statDescription: string;
unitType: number;
iconImage: string;
mergeMethod: number;
unitLabel: string;
weight: number;
medalTierHash: number;
  }

export interface DestinyMedalTierDefinition {
    tierName: string;
order: number;
hash: number;
index: number;
redacted: boolean;
  }

export interface DestinyLeaderboard {
    statId: string;
entries: array;
  }

export interface DestinyLeaderboardEntry {
    rank: number;
player: object;
characterId: number;
value: object;
  }

export interface DestinyLeaderboardResults {
    focusMembershipId: number;
focusCharacterId: number;
  }

export interface DestinyClanAggregateStat {
    mode: number;
statId: string;
value: object;
  }

export interface DestinyEntitySearchResult {
    suggestedWords: array;
results: object;
  }

export interface DestinyEntitySearchResultItem {
    hash: number;
entityType: string;
displayProperties: object;
weight: number;
  }

export interface DestinyHistoricalStatsByPeriod {
    allTime: object;
allTimeTier1: object;
allTimeTier2: object;
allTimeTier3: object;
daily: array;
monthly: array;
  }

export interface DestinyHistoricalStatsPeriodGroup {
    period: string;
activityDetails: object;
values: object;
  }

export interface DestinyHistoricalStatsAccountResult {
    mergedDeletedCharacters: undefined;
mergedAllCharacters: undefined;
characters: array;
  }

export interface DestinyHistoricalStatsWithMerged {
    results: object;
merged: undefined;
  }

export interface DestinyHistoricalStatsPerCharacter {
    characterId: number;
deleted: boolean;
results: object;
merged: undefined;
  }

export interface DestinyActivityHistoryResults {
    activities: array;
  }

export interface DestinyHistoricalWeaponStatsData {
    weapons: array;
  }

export interface DestinyAggregateActivityResults {
    activities: array;
  }

export interface DestinyAggregateActivityStats {
    activityHash: number;
values: object;
  }

export interface DestinyMilestoneContent {
    about: string;
status: string;
tips: array;
itemCategories: array;
  }

export interface DestinyMilestoneContentItemCategory {
    title: string;
itemHashes: array;
  }

export interface DestinyPublicMilestone {
    milestoneHash: number;
availableQuests: array;
activities: array;
vendorHashes: array;
vendors: array;
startDate: string;
endDate: string;
order: number;
  }

export interface DestinyPublicMilestoneQuest {
    questItemHash: number;
activity: object;
challenges: array;
  }

export interface DestinyPublicMilestoneActivity {
    activityHash: number;
modifierHashes: array;
variants: array;
activityModeHash: number;
activityModeType: number;
  }

export interface DestinyPublicMilestoneActivityVariant {
    activityHash: number;
activityModeHash: number;
activityModeType: number;
  }

export interface DestinyPublicMilestoneChallenge {
    objectiveHash: number;
activityHash: number;
  }

export interface DestinyPublicMilestoneChallengeActivity {
    activityHash: number;
challengeObjectiveHashes: array;
modifierHashes: array;
loadoutRequirementIndex: number;
phaseHashes: array;
booleanActivityOptions: object;
  }

export interface DestinyPublicMilestoneVendor {
    vendorHash: number;
previewItemHash: number;
  }

export interface AwaInitializeResponse {
    correlationId: string;
sentToSelf: boolean;
  }

export interface AwaPermissionRequested {
    type: number;
affectedItemId: number;
membershipType: number;
characterId: number;
  }

export interface AwaUserResponse {
    selection: number;
correlationId: string;
nonce: array;
  }

export interface AwaAuthorizationResult {
    userSelection: number;
responseReason: number;
developerNote: string;
actionToken: string;
maximumNumberOfUses: number;
validUntil: string;
type: number;
membershipType: number;
  }

export interface DestinyPublicActivityStatus {
    challengeObjectiveHashes: array;
modifierHashes: array;
rewardTooltipItems: array;
  }

export interface InterpolationPoint {
    value: number;
weight: number;
  }

export interface InterpolationPointFloat {
    value: number;
weight: number;
  }

export interface DateRange {
    start: string;
end: string;
  }

export interface HyperlinkReference {
    title: string;
url: string;
  }

export interface TagResponse {
    tagText: string;
ignoreStatus: undefined;
  }

export interface SearchResultOfGroupV2Card {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface SearchResultOfGroupMember {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface SearchResultOfGroupBan {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface SearchResultOfGroupMemberApplication {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface EntityActionResult {
    entityId: number;
result: number;
  }

export interface SearchResultOfGroupMembership {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface SearchResultOfGroupPotentialMembership {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface PartnerOfferClaimRequest {
    PartnerOfferId: string;
BungieNetMembershipId: number;
TransactionId: string;
  }

export interface PartnerOfferSkuHistoryResponse {
    SkuIdentifier: string;
LocalizedName: string;
LocalizedDescription: string;
ClaimDate: string;
AllOffersApplied: boolean;
TransactionId: string;
SkuOffers: array;
  }

export interface PartnerOfferHistoryResponse {
    PartnerOfferKey: string;
MembershipId: number;
MembershipType: number;
LocalizedName: string;
LocalizedDescription: string;
IsConsumable: boolean;
QuantityApplied: number;
ApplyDate: string;
  }

export interface BungieRewardDisplay {
    UserRewardAvailabilityModel: undefined;
ObjectiveDisplayProperties: undefined;
RewardDisplayProperties: undefined;
  }

export interface UserRewardAvailabilityModel {
    AvailabilityModel: undefined;
IsAvailableForUser: boolean;
IsUnlockedForUser: boolean;
  }

export interface RewardAvailabilityModel {
    HasExistingCode: boolean;
RecordDefinitions: array;
CollectibleDefinitions: array;
IsOffer: boolean;
HasOffer: boolean;
OfferApplied: boolean;
DecryptedToken: string;
IsLoyaltyReward: boolean;
ShopifyEndDate: string;
GameEarnByDate: string;
RedemptionEndDate: string;
  }

export interface CollectibleDefinitions {
    CollectibleDefinition: undefined;
DestinyInventoryItemDefinition: undefined;
  }

export interface RewardDisplayProperties {
    Name: string;
Description: string;
ImagePath: string;
  }

export interface ComponentResponse {
    privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyVendorReceiptsComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyInventoryComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyProfileComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyPlatformSilverComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyKiosksComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyPlugSetsComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyProfileProgressionComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyPresentationNodesComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyProfileRecordsComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyProfileCollectiblesComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyProfileTransitoryComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyMetricsComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyStringVariablesComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyCharacterComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyInventoryComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyKiosksComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyPlugSetsComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DestinyBaseItemComponentSetOfuint32 {
    objectives: undefined;
perks: undefined;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyPresentationNodesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyCharacterRecordsComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyCollectiblesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyStringVariablesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyCraftablesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DestinyBaseItemComponentSetOfint64 {
    objectives: undefined;
perks: undefined;
  }

export interface DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyItemPerksComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DestinyItemComponentSetOfint64 {
    instances: undefined;
renderData: undefined;
stats: undefined;
sockets: undefined;
reusablePlugs: undefined;
plugObjectives: undefined;
talentGrids: undefined;
plugStates: undefined;
objectives: undefined;
perks: undefined;
  }

export interface DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyItemRenderComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyItemStatsComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint64AndDestinyCurrenciesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyCharacterComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyCharacterProgressionComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyCharacterRenderComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyCharacterActivitiesComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyCharacterRecordsComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyCollectiblesComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyCurrenciesComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyItemComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyItemInstanceComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyItemObjectivesComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyItemPerksComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyItemRenderComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyItemStatsComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyItemTalentGridComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyItemSocketsComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyItemReusablePlugsComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyItemPlugObjectivesComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyVendorGroupComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyVendorComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DestinyVendorSaleItemSetComponentOfDestinyVendorSaleItemComponent {
    saleItems: object;
  }

export interface DictionaryComponentResponseOfuint32AndPersonalDestinyVendorSaleItemSetComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DestinyBaseItemComponentSetOfint32 {
    objectives: undefined;
perks: undefined;
  }

export interface DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint32AndDestinyItemPerksComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DestinyItemComponentSetOfint32 {
    instances: undefined;
renderData: undefined;
stats: undefined;
sockets: undefined;
reusablePlugs: undefined;
plugObjectives: undefined;
talentGrids: undefined;
plugStates: undefined;
objectives: undefined;
perks: undefined;
  }

export interface DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint32AndDestinyItemRenderComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint32AndDestinyItemStatsComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyVendorComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface SingleComponentResponseOfDestinyVendorCategoriesComponent {
    data: undefined;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyPublicVendorComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DestinyVendorSaleItemSetComponentOfDestinyPublicVendorSaleItemComponent {
    saleItems: object;
  }

export interface DictionaryComponentResponseOfuint32AndPublicDestinyVendorSaleItemSetComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DestinyItemComponentSetOfuint32 {
    instances: undefined;
renderData: undefined;
stats: undefined;
sockets: undefined;
reusablePlugs: undefined;
plugObjectives: undefined;
talentGrids: undefined;
plugStates: undefined;
objectives: undefined;
perks: undefined;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent {
    data: object;
privacy: number;
disabled: boolean;
  }

export interface SearchResultOfDestinyEntitySearchResultItem {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface TrendingCategories {
    categories: array;
  }

export interface TrendingCategory {
    categoryName: string;
entries: undefined;
categoryId: string;
  }

export interface TrendingEntry {
    weight: number;
isFeatured: boolean;
identifier: string;
entityType: number;
displayName: string;
tagline: string;
image: string;
startDate: string;
endDate: string;
link: string;
webmVideo: string;
mp4Video: string;
featureImage: string;
items: array;
creationDate: string;
  }

export interface TrendingDetail {
    identifier: string;
entityType: number;
news: undefined;
support: undefined;
destinyItem: undefined;
destinyActivity: undefined;
destinyRitual: undefined;
creation: undefined;
  }

export interface TrendingEntryNews {
    article: undefined;
  }

export interface TrendingEntrySupportArticle {
    article: undefined;
  }

export interface TrendingEntryDestinyItem {
    itemHash: number;
  }

export interface TrendingEntryDestinyActivity {
    activityHash: number;
status: undefined;
  }

export interface TrendingEntryDestinyRitual {
    image: string;
icon: string;
title: string;
subtitle: string;
dateStart: string;
dateEnd: string;
milestoneDetails: object;
eventContent: object;
  }

export interface TrendingEntryCommunityCreation {
    media: string;
title: string;
author: string;
authorMembershipId: number;
postId: number;
body: string;
upvotes: number;
  }

export interface SearchResultOfTrendingEntry {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface FireteamSummary {
    fireteamId: number;
groupId: number;
platform: number;
activityType: number;
isImmediate: boolean;
scheduledTime: string;
ownerMembershipId: number;
playerSlotCount: number;
alternateSlotCount: number;
availablePlayerSlotCount: number;
availableAlternateSlotCount: number;
title: string;
dateCreated: string;
dateModified: string;
isPublic: boolean;
locale: string;
isValid: boolean;
datePlayerModified: string;
titleBeforeModeration: string;
  }

export interface FireteamResponse {
    Summary: undefined;
Members: array;
Alternates: array;
  }

export interface FireteamMember {
    destinyUserInfo: undefined;
bungieNetUserInfo: undefined;
characterId: number;
dateJoined: string;
hasMicrophone: boolean;
lastPlatformInviteAttemptDate: string;
lastPlatformInviteAttemptResult: number;
  }

export interface FireteamUserInfoCard {
    FireteamDisplayName: string;
FireteamMembershipType: number;
supplementalDisplayName: string;
iconPath: string;
crossSaveOverride: number;
applicableMembershipTypes: array;
isPublic: boolean;
membershipType: number;
membershipId: number;
displayName: string;
bungieGlobalDisplayName: string;
bungieGlobalDisplayNameCode: number;
  }

export interface SearchResultOfFireteamSummary {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface SearchResultOfFireteamResponse {
    results: array;
totalResults: number;
hasMore: boolean;
query: undefined;
replacementContinuationToken: string;
useTotalResults: boolean;
  }

export interface BungieFriendListResponse {
    friends: array;
  }

export interface BungieFriend {
    lastSeenAsMembershipId: number;
lastSeenAsBungieMembershipType: number;
bungieGlobalDisplayName: string;
bungieGlobalDisplayNameCode: number;
onlineStatus: number;
onlineTitle: number;
relationship: number;
bungieNetUser: undefined;
  }

export interface BungieFriendRequestListResponse {
    incomingRequests: array;
outgoingRequests: array;
  }

export interface PlatformFriendResponse {
    itemsPerPage: number;
currentPage: number;
hasMore: boolean;
platformFriends: array;
  }

export interface PlatformFriend {
    platformDisplayName: string;
friendPlatform: number;
destinyMembershipId: number;
destinyMembershipType: number;
bungieNetMembershipId: number;
bungieGlobalDisplayName: string;
bungieGlobalDisplayNameCode: number;
  }

export interface CoreSettingsConfiguration {
    environment: string;
systems: object;
ignoreReasons: array;
forumCategories: array;
groupAvatars: array;
destinyMembershipTypes: array;
recruitmentPlatformTags: array;
recruitmentMiscTags: array;
recruitmentActivities: array;
userContentLocales: array;
systemContentLocales: array;
clanBannerDecals: array;
clanBannerDecalColors: array;
clanBannerGonfalons: array;
clanBannerGonfalonColors: array;
clanBannerGonfalonDetails: array;
clanBannerGonfalonDetailColors: array;
clanBannerStandards: array;
destiny2CoreSettings: undefined;
emailSettings: undefined;
fireteamActivities: array;
  }

export interface CoreSystem {
    enabled: boolean;
parameters: object;
  }

export interface CoreSetting {
    identifier: string;
isDefault: boolean;
displayName: string;
summary: string;
imagePath: string;
childSettings: array;
  }

export interface Destiny2CoreSettings {
    collectionRootNode: number;
badgesRootNode: number;
recordsRootNode: number;
medalsRootNode: number;
metricsRootNode: number;
activeTriumphsRootNodeHash: number;
activeSealsRootNodeHash: number;
legacyTriumphsRootNodeHash: number;
legacySealsRootNodeHash: number;
medalsRootNodeHash: number;
exoticCatalystsRootNodeHash: number;
loreRootNodeHash: number;
craftingRootNodeHash: number;
currentRankProgressionHashes: array;
insertPlugFreeProtectedPlugItemHashes: array;
insertPlugFreeBlockedSocketTypeHashes: array;
undiscoveredCollectibleImage: string;
ammoTypeHeavyIcon: string;
ammoTypeSpecialIcon: string;
ammoTypePrimaryIcon: string;
currentSeasonalArtifactHash: number;
currentSeasonHash: number;
seasonalChallengesPresentationNodeHash: number;
futureSeasonHashes: array;
pastSeasonHashes: array;
  }

export interface GlobalAlert {
    AlertKey: string;
AlertHtml: string;
AlertTimestamp: string;
AlertLink: string;
AlertLevel: number;
AlertType: number;
StreamInfo: undefined;
  }

export interface StreamInfo {
    ChannelName: string;
  }