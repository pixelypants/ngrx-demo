export interface RacingBet {
    isFutures: boolean;
    meetingName: string;
    meetingDate: string;
    venueMnemonic: string;
    location: string;
    raceType: string;
    raceNumber: number;
    raceName: string;
    cashOutEligibility: string;
    raceStartTime: string;
    runnerNumber: number;
    runnerName: string;
    barrierNumber: number;
    riderDriverName: string;
    trainerName: string;
    returnWin: number;
    returnPlace: number;
    bettingStatus: string;
    allowPlace: boolean;
    propositionNumber: number;
}

export interface RacingBetResponse {
    results: RacingBet[];
}

export interface SportsBet {
    sportName: string;
    competitionName: string;
    matchName: string;
    matchId: string;
    startTime: string;
    marketName: string;
    betOption: string;
    closeTime: string;
    inPlay: boolean;
    cashOutEligibility: string;
    propositionName: string;
    returnWin: number;
    returnPlace: number;
    bettingStatus: string;
    allowPlace: boolean;
    propId: number;
}
