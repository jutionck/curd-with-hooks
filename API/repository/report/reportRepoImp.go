package report

import (
	"database/sql"
	"github.com/jutionck/go-api-rumahmakan/models"
	"github.com/jutionck/go-api-rumahmakan/utils"
	"log"
)

type ReportRepository struct {
	Conn *sql.DB
}

func (r *ReportRepository) GetTrasanctionOfDay() ([]*models.Report, error) {
	var reports []*models.Report
	rows, err := r.Conn.Query(utils.SELECT_REPORT_BYDAY)
	if err != nil {
		log.Print(err)
	}
	for rows.Next() {
		report := models.Report{}
		if err := rows.Scan(&report.ReportTransaction.NotaNumber,&report.ReportTransaction.NotaDate,&report.ReportTransaction.CustomerName,&report.ReportTransaction.DetailTransaction,&report.ReportTransaction.Total); err != nil {
			log.Fatalf("%v", err)
			return nil, err
		} else {
			reports = append(reports, &report)
		}
	}
	return reports, nil
}

func NewReportRepository(db *sql.DB) ReportRepoInterface {
	return &ReportRepository{Conn: db}
}
