package report

import "github.com/jutionck/go-api-rumahmakan/models"

type ReportUsecaseInterface interface {
	//GetAllTransaction() ([]*models.Report, error)
	GetTrasanctionOfDay() ([]*models.Report, error)
	//GetTrasanctionOfMonth() ([]*models.Report, error)
	//FindTrasanctionOfByDay(string) (models.Report, error)
	//FindTrasanctionOfByMonth(int) (models.Report, error)
}
