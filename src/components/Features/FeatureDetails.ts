import Dummy from "./Feature Sections/Dummy"

type FeatureDetail = {
  featureID: string;
  title: string;
  description: string;
  sectionComponent: () => JSX.Element
}

const details: FeatureDetail[] = [{
    featureID: "inventory-management",
    title: "Inventory Management",
    description: "Manage your stock levels, orders, and suppliers efficiently.",
    sectionComponent: Dummy
  }, {
    featureID: "customer-relationship-management",
    title: "Customer Relationship Management",
    description: "Track and manage customer interactions and data throughout the customer lifecycle.",
    sectionComponent: Dummy
  }, {
    featureID: "sales-analytics",
    title: "Sales Analytics",
    description: "Analyze sales data to make informed business decisions.",
    sectionComponent: Dummy
  }, {
    featureID: "order-processing",
    title: "Order Processing",
    description: "Automate and streamline your order processing workflow.",
    sectionComponent: Dummy
  }, {
    featureID: "financial-management",
    title: "Financial Management",
    description: "Manage your financial operations, including accounting, invoicing, and budgeting.",
    sectionComponent: Dummy
  }, {
    featureID: "human-resources",
    title: "Human Resources",
    description: "Manage employee records, payroll, and benefits.",
    sectionComponent: Dummy
  }, {
    featureID: "project-management",
    title: "Project Management",
    description: "Plan, execute, and monitor projects efficiently.",
    sectionComponent: Dummy
  }, {
    featureID: "supply-chain-management",
    title: "Supply Chain Management",
    description: "Optimize your supply chain operations from procurement to delivery.",
    sectionComponent: Dummy
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