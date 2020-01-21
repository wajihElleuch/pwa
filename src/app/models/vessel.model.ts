export class Vessel {
  id: number;
  name: string;
  HTA: string;
  icon: string;
  details: VesselDetail;
}

export interface VesselDetail {
  id: number;
  Arrival_at_Terminal_Road: OneDetail;
  Notice_of_readiness_Tendered: OneDetail;
  Drop_Anchor: OneDetail;
  Anchor_Aweight: OneDetail;
  Pilot_on_Board_In: OneDetail;
  Commenced_Mooring: OneDetail;
  First_line: OneDetail;
  Completed_mooring: OneDetail;
  All_Fast: OneDetail;
  Pilot_Off: OneDetail;
  Agent_and_authorities_on_board: OneDetail;
  Free_practise_granted: OneDetail;
  Notice_of_readiness_accepted: OneDetail;
  Tank_inspection_Start: OneDetail;
  Tank_inspection_End: OneDetail;
  Hose_connection_Start: OneDetail;
  Hose_connection_End: OneDetail;
}

interface OneDetail {
  checked: boolean;
  date: string;
  name: string;
}
