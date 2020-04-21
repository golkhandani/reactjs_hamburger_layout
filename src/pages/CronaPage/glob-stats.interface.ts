export interface ICronaGlobStat {
    results?: ICronaGlobStatResult[];
    stat?: string;
}

export interface ICronaGlobStatResult {
    total_cases?: number;
    total_recovered?: number;
    total_unresolved?: number;
    total_deaths?: number;
    total_new_cases_today?: number;
    total_new_deaths_today?: number;
    total_active_cases?: number;
    total_serious_cases?: number;
    total_affected_countries?: number;
    source?: Source;
}

export interface Source {
    url?: string;
}