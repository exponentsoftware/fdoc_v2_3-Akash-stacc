function processCompanies(companies) {
  var processedCompanies = [];

  for (var i = 0; i < companies.length; i++) {
    var company = companies[i];
    var numEmployees = company.employees.length;
    var departments = {};

    for (var j = 0; j < company.employees.length; j++) {
      var employee = company.employees[j];
      var departmentName = employee.department;

      if (departments[departmentName]) {
        departments[departmentName] += 1;
      } else {
        departments[departmentName] = 1;
      }
    }

    var processedCompany = {
      name: company.name,
      numEmployees: numEmployees,
      employees: company.employees,
      departments: departments,
    };

    processedCompanies.push(processedCompany);
  }

  return processedCompanies;
}
function processCompanies(companies) {
  var processedCompanies = [];

  for (var i = 0; i < companies.length; i++) {
    var company = companies[i];
    var numEmployees = company.employees.length;
    var departments = {};

    for (var j = 0; j < company.employees.length; j++) {
      var employee = company.employees[j];
      var departmentName = employee.department;

      if (departments[departmentName]) {
        departments[departmentName] += 1;
      } else {
        departments[departmentName] = 1;
      }
    }

    var processedCompany = {
      name: company.name,
      numEmployees: numEmployees,
      employees: company.employees,
      departments: departments,
    };

    processedCompanies.push(processedCompany);
  }

  return processedCompanies;
}
var companies = [
  {
    name: "Company 1",
    employees: [
      { name: "Alice", role: "Developer", department: "Engineering" },
      { name: "Bob", role: "Manager", department: "Engineering" },
      { name: "Charlie", role: "Designer", department: "Design" },
    ],
  },
  // ... (more companies)
];

var processedCompanies = processCompanies(companies);
console.log(processedCompanies);
