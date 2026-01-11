from enum import Enum

class AuthProvider(str, Enum):
    EMAIL = "email"
    GOOGLE = "google"
    APPLE = "apple"

class UserType(str, Enum):
    FIRST_TIME = "first_time"
    EXPERIENCED = "experienced"
    NEW_PARENT = "new_parent"
    ESTABLISHED_PARENT = "established_parent"

class BudgetTier(str, Enum):
    MINIMAL = "minimal"
    MODERATE = "moderate"
    COMFORTABLE = "comfortable"
    PREMIUM = "premium"
    UNDECIDED = "undecided"

class SpaceType(str, Enum):
    SMALL_APARTMENT = "small_apartment"
    APARTMENT = "apartment"
    SMALL_HOUSE = "small_house"
    LARGE_HOUSE = "large_house"

class SleepLocation(str, Enum):
    OWN_ROOM = "own_room"
    PARENTS_ROOM_TEMPORARY = "parents_room_temporary"
    PARENTS_ROOM_EXTENDED = "parents_room_extended"
    UNDECIDED = "undecided"

class FeedingPlan(str, Enum):
    BREASTFEED = "breastfeed"
    FORMULA = "formula"
    COMBINATION = "combination"
    UNDECIDED = "undecided"

class SupportLevel(str, Enum):
    COUPLE = "couple"
    SINGLE = "single"
    FAMILY_SUPPORT = "family_support"
    CHILDCARE = "childcare"

class VehicleType(str, Enum):
    COMPACT = "compact"
    STANDARD = "standard"
    LARGE = "large"
    NONE = "none"

class SecondhandComfort(str, Enum):
    HIGH = "high"
    MODERATE = "moderate"
    LOW = "low"

class PriceTier(str, Enum):
    BUDGET = "budget"
    MID_RANGE = "mid_range"
    PREMIUM = "premium"

class SpaceRequired(str, Enum):
    COMPACT = "compact"
    MODERATE = "moderate"
    LARGE = "large"

class Urgency(str, Enum):
    IMMEDIATE = "immediate"
    EARLY_MONTHS = "early_months"
    LATER = "later"
    OPTIONAL = "optional"

class CategoryAssignment(str, Enum):
    MUST_HAVE_NOW = "must_have_now"
    GET_SOON = "get_soon"
    CAN_WAIT = "can_wait"
    SKIP_IT = "skip_it"
    CONSIDER_IF = "consider_if"

class Priority(str, Enum):
    MUST_HAVE = "must_have"
    NICE_TO_HAVE = "nice_to_have"
    SPLURGE = "splurge"
    SKIP = "skip"

class PurchaseTimeframe(str, Enum):
    NOW = "now"
    THIS_MONTH = "this_month"
    NEXT_MONTH = "next_month"
    THIRD_TRIMESTER = "third_trimester"
    AFTER_BIRTH = "after_birth"
    MONTH_1_3 = "month_1_3"
    MONTH_3_6 = "month_3_6"
    MONTH_6_PLUS = "month_6_plus"

class UrgencyLevel(str, Enum):
    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"
