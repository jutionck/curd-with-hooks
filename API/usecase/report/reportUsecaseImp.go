package report

import (
	"github.com/jutionck/go-api-rumahmakan/models"
	"github.com/jutionck/go-api-rumahmakan/repository/report"
)

type reportUsecase struct {
	reportRepo report.ReportRepoInterface
}

func NewReportUsecase(reportRepo report.ReportRepoInterface) reportUsecase {
	return reportUsecase{reportRepo: reportRepo}
}

func (r reportUsecase) GetTrasanctionOfDay() ([]*models.Report, error) {
	reports, err := r.reportRepo.GetTrasanctionOfDay()
	if err != nil {
		return nil, err
	}
	return reports, nil
}
