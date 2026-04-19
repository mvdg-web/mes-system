import { inject, Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { filter, map, Observable, tap } from 'rxjs';
import { WorkOrder } from '../generated/graphql';

const UPDATE_STATUS = gql`
  mutation UpdateStatus($id: String!, $status: String!) {
    updateWorkOrderStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;

@Injectable({ providedIn: 'root' })
export class WorkOrderService {
  private apollo = inject(Apollo);

  getWorkOrders(): Observable<WorkOrder[]> {
    return this.apollo
      .watchQuery<any>({
        query: gql`
          query GetWorkOrders {
            findAllWorkOrders {
              id
              status
              product {
                name
              }
              quantity
            }
          }
        `,
      })
      .valueChanges.pipe(
        filter((result) => !!result.data),
        map((result) => result.data.findAllWorkOrders),
      );
  }

  updateStatus(id: string, newStatus: string) {
    return this.apollo.mutate({
      mutation: UPDATE_STATUS,
      variables: { id, status: newStatus },
    });
  }
}
