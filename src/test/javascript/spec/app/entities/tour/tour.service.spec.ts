import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { TourService } from 'app/entities/tour/tour.service';
import { ITour, Tour } from 'app/shared/model/tour.model';
import { Tagcolor } from 'app/shared/model/enumerations/tagcolor.model';

describe('Service Tests', () => {
  describe('Tour Service', () => {
    let injector: TestBed;
    let service: TourService;
    let httpMock: HttpTestingController;
    let elemDefault: ITour;
    let expectedResult: ITour | ITour[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(TourService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Tour(
        0,
        0,
        0,
        0,
        0,
        'AAAAAAA',
        'AAAAAAA',
        false,
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        Tagcolor.RED,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        currentDate
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            lockdelay: currentDate.format(DATE_TIME_FORMAT),
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

      it('should create a Tour', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            lockdelay: currentDate.format(DATE_TIME_FORMAT),
            createdat: currentDate.format(DATE_TIME_FORMAT),
            updatedat: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            lockdelay: currentDate,
            createdat: currentDate,
            updatedat: currentDate
          },
          returnedFromService
        );

        service.create(new Tour()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Tour', () => {
        const returnedFromService = Object.assign(
          {
            categoryid: 1,
            userid: 1,
            productid: 1,
            evenementid: 1,
            slug: 'BBBBBB',
            name: 'BBBBBB',
            islock: true,
            lockdelay: currentDate.format(DATE_TIME_FORMAT),
            about: 'BBBBBB',
            title: 'BBBBBB',
            tag: 'BBBBBB',
            tagcolor: 'BBBBBB',
            postalcode: 'BBBBBB',
            phones: 'BBBBBB',
            website: 'BBBBBB',
            facebook: 'BBBBBB',
            twitter: 'BBBBBB',
            gplus: 'BBBBBB',
            linkedin: 'BBBBBB',
            instagram: 'BBBBBB',
            email: 'BBBBBB',
            url: 'BBBBBB',
            position: 1,
            othercontacts: 'BBBBBB',
            otherfields: 'BBBBBB',
            createdat: currentDate.format(DATE_TIME_FORMAT),
            updatedat: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            lockdelay: currentDate,
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

      it('should return a list of Tour', () => {
        const returnedFromService = Object.assign(
          {
            categoryid: 1,
            userid: 1,
            productid: 1,
            evenementid: 1,
            slug: 'BBBBBB',
            name: 'BBBBBB',
            islock: true,
            lockdelay: currentDate.format(DATE_TIME_FORMAT),
            about: 'BBBBBB',
            title: 'BBBBBB',
            tag: 'BBBBBB',
            tagcolor: 'BBBBBB',
            postalcode: 'BBBBBB',
            phones: 'BBBBBB',
            website: 'BBBBBB',
            facebook: 'BBBBBB',
            twitter: 'BBBBBB',
            gplus: 'BBBBBB',
            linkedin: 'BBBBBB',
            instagram: 'BBBBBB',
            email: 'BBBBBB',
            url: 'BBBBBB',
            position: 1,
            othercontacts: 'BBBBBB',
            otherfields: 'BBBBBB',
            createdat: currentDate.format(DATE_TIME_FORMAT),
            updatedat: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            lockdelay: currentDate,
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

      it('should delete a Tour', () => {
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
