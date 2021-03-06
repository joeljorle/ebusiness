import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiParseLinks } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IFiles } from 'app/shared/model/files.model';

import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';
import { FilesService } from './files.service';
import { FilesDeleteDialogComponent } from './files-delete-dialog.component';

@Component({
  selector: 'jhi-files',
  templateUrl: './files.component.html'
})
export class FilesComponent implements OnInit, OnDestroy {
  files: IFiles[];
  eventSubscriber?: Subscription;
  itemsPerPage: number;
  links: any;
  page: number;
  predicate: string;
  ascending: boolean;

  constructor(
    protected filesService: FilesService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected parseLinks: JhiParseLinks
  ) {
    this.files = [];
    this.itemsPerPage = ITEMS_PER_PAGE;
    this.page = 0;
    this.links = {
      last: 0
    };
    this.predicate = 'id';
    this.ascending = true;
  }

  loadAll(): void {
    this.filesService
      .query({
        page: this.page,
        size: this.itemsPerPage,
        sort: this.sort()
      })
      .subscribe((res: HttpResponse<IFiles[]>) => this.paginateFiles(res.body, res.headers));
  }

  reset(): void {
    this.page = 0;
    this.files = [];
    this.loadAll();
  }

  loadPage(page: number): void {
    this.page = page;
    this.loadAll();
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInFiles();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IFiles): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInFiles(): void {
    this.eventSubscriber = this.eventManager.subscribe('filesListModification', () => this.reset());
  }

  delete(files: IFiles): void {
    const modalRef = this.modalService.open(FilesDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.files = files;
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected paginateFiles(data: IFiles[] | null, headers: HttpHeaders): void {
    const headersLink = headers.get('link');
    this.links = this.parseLinks.parse(headersLink ? headersLink : '');
    if (data) {
      for (let i = 0; i < data.length; i++) {
        this.files.push(data[i]);
      }
    }
  }
}
