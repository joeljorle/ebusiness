import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { FilesService } from 'app/entities/files/files.service';
import { IFiles, Files } from 'app/shared/model/files.model';

describe('Service Tests', () => {
  describe('Files Service', () => {
    let injector: TestBed;
    let service: FilesService;
    let httpMock: HttpTestingController;
    let elemDefault: IFiles;
    let expectedResult: IFiles | IFiles[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(FilesService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Files(0, 'AAAAAAA', 0, 0, 0, 0, 0, 0, 0, false, false, false, false, false, currentDate, currentDate);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            createdat: currentDate.format(DATE_TIME_FORMAT),
            updatedat: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Files', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            createdat: currentDate.format(DATE_TIME_FORMAT),
            updatedat: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            createdat: currentDate,
            updatedat: currentDate
          },
          returnedFromService
        );

        service.create(new Files()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Files', () => {
        const returnedFromService = Object.assign(
          {
            slug: 'BBBBBB',
            userid: 1,
            categoryid: 1,
            productid: 1,
            tourid: 1,
            tourgroupid: 1,
            tourcategoryid: 1,
            evenementid: 1,
            islogoimg: true,
            isprofileimg: true,
            iscoverimg: true,
            issliderimg: true,
            isotherimg: true,
            createdat: currentDate.format(DATE_TIME_FORMAT),
            updatedat: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            createdat: currentDate,
            updatedat: currentDate
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Files', () => {
        const returnedFromService = Object.assign(
          {
            slug: 'BBBBBB',
            userid: 1,
            categoryid: 1,
            productid: 1,
            tourid: 1,
            tourgroupid: 1,
            tourcategoryid: 1,
            evenementid: 1,
            islogoimg: true,
            isprofileimg: true,
            iscoverimg: true,
            issliderimg: true,
            isotherimg: true,
            createdat: currentDate.format(DATE_TIME_FORMAT),
            updatedat: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            createdat: currentDate,
            updatedat: currentDate
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Files', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
