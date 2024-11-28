import Dummy from "./Feature Sections/Dummy"

/**
 * Represents the details of a feature in the shopping website.
 */
type FeatureDetail = {
  /**
   * Unique identifier for the feature.
   * @example "feature-123"
   */
  featureID: string;

  /**
   * The name of the feature.
   * @example "Premium Support"
   */
  title: string;

  /**
   * A brief description of what the feature offers.
   * @example "Provides 24/7 premium customer support."
   */
  description: string;

  /**
   * A React component that renders the feature's section.
   * @returns A JSX element representing the feature's section.
   */
  sectionComponent: () => JSX.Element;

  /**
   * Monthly price per user for the feature, in USD.
   * @example 9.99
   */
  price_per_user_per_month: number;

  /**
   * Yearly price for the feature, in USD.
   * @example 99.99
   */
  price_yearly: number;

  /**
   * Enterprise price for the feature, in USD.
   * @example 999.99
   */
  price_enterprise: number;
}

const details: FeatureDetail[] = [{
    featureID: "inventory-management",
    title: "Inventory Management",
    description: "Manage your stock levels, orders, and suppliers efficiently.",
    sectionComponent: Dummy,
    price_per_user_per_month: 70,
    price_yearly: 12*70,
    price_enterprise: 999
  }, {
    featureID: "customer-relationship-management",
    title: "Customer Relationship Management",
    description: "Track and manage customer interactions and data throughout the customer lifecycle.",
    sectionComponent: Dummy,
    price_per_user_per_month: 70,
    price_yearly: 12*70,
    price_enterprise: 999
  }, {
    featureID: "sales-analytics",
    title: "Sales Analytics",
    description: "Analyze sales data to make informed business decisions.",
    sectionComponent: Dummy,
    price_per_user_per_month: 70,
    price_yearly: 12*70,
    price_enterprise: 999
  }, {
    featureID: "order-processing",
    title: "Order Processing",
    description: "Automate and streamline your order processing workflow.",
    sectionComponent: Dummy,
    price_per_user_per_month: 70,
    price_yearly: 12*70,
    price_enterprise: 999
  }, {
    featureID: "financial-management",
    title: "Financial Management",
    description: "Manage your financial operations, including accounting, invoicing, and budgeting.",
    sectionComponent: Dummy,
    price_per_user_per_month: 70,
    price_yearly: 12*70,
    price_enterprise: 999
  }, {
    featureID: "human-resources",
    title: "Human Resources",
    description: "Manage employee records, payroll, and benefits.",
    sectionComponent: Dummy,
    price_per_user_per_month: 70,
    price_yearly: 12*70,
    price_enterprise: 999
  }, {
    featureID: "project-management",
    title: "Project Management",
    description: "Plan, execute, and monitor projects efficiently.",
    sectionComponent: Dummy,
    price_per_user_per_month: 70,
    price_yearly: 12*70,
    price_enterprise: 999
  }, {
    featureID: "supply-chain-management",
    title: "Supply Chain Management",
    description: "Optimize your supply chain operations from procurement to delivery.",
    sectionComponent: Dummy,
    price_per_user_per_month: 70,
    price_yearly: 12*70,
    price_enterprise: 999
  }
]

/**
 * Validates that each featureID in the provided array of FeatureDetail objects is unique.
 * 
 * This function iterates through the array of FeatureDetail objects and checks if any
 * featureID is duplicated. If a duplicate featureID is found, an error is thrown.
 * 
 * @param details - An array of FeatureDetail objects to be validated.
 * 
 * @throws {Error} Throws an error if a duplicate featureID is found.
 * 
 * @example
 * const details: FeatureDetail[] = [
 *   { featureID: "inventory-management", title: "Inventory Management", description: "Manage your stock levels, orders, and suppliers efficiently.", sectionComponent: Dummy },
 *   { featureID: "customer-relationship-management", title: "Customer Relationship Management", description: "Track and manage customer interactions and data throughout the customer lifecycle.", sectionComponent: Dummy }
 * ];
 * 
 * validateUniqueFeatureIDs(details); // No error thrown
 * 
 * const invalidDetails: FeatureDetail[] = [
 *   { featureID: "inventory-management", title: "Inventory Management", description: "Manage your stock levels, orders, and suppliers efficiently.", sectionComponent: Dummy },
 *   { featureID: "inventory-management", title: "Inventory Management Duplicate", description: "Duplicate featureID example.", sectionComponent: Dummy }
 * ];
 * 
 * validateUniqueFeatureIDs(invalidDetails); // Error: Duplicate featureID found: inventory-management
 */
function validateUniqueFeatureIDs(details: FeatureDetail[]): void {
  const featureIDSet = new Set<string>();
  for (const detail of details) {
    if (featureIDSet.has(detail.featureID)) {
      throw new Error(`Duplicate featureID found: ${detail.featureID}`);
    }
    featureIDSet.add(detail.featureID)
  }
}

// Validate the details array
validateUniqueFeatureIDs(details)

export default details